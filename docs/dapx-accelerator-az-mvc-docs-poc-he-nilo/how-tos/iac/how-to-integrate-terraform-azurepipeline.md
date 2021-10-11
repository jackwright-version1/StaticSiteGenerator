### How to integrate terraform scripts in Azure pipelines

Azure pipelines are defined for each stage of Terraform i.e, Validate, Apply, Destroy.
Different YAML files used for terraform operations are defined under .azurepipeline/templates folder.

To apply terraform configurations to new environment, add a template job in *$ORG-iac-$ENV-apply* pipeline and refer to terraform-root.yml file. This file runs terraform PLAN and terraform APPLY stage. 

    - template: templates/terraform-root.yml
        parameters:
            tf_location: 'eun'
            run_apply: true
            tf_spoke: '$ENV'
            environment: '$ENV'
            tf_state_subscription: $(tf_state_subscription)
            tf_state_resourcegroup: $(tf_state_resourcegroup)
            tf_state_storageaccount: $(tf_state_storageaccount)
            tf_state_storagecontainer: $(tf_state_storagecontainer)

**Note**: If *run_apply* is set to *true*, it runs both PLAN and APPLY stages otherwise it only runs PLAN stage.

To destroy the environment, add template job with reference to terraform-root-destroy.yml file. This runs terraform DESTROY stage.

    - template: templates/terraform-root-destroy.yml
        parameters:
            tf_location: 'eun'
            run_destroy: true
            tf_spoke: '$ENV'
            environment: '$ENV'
            tf_state_subscription: $(tf_state_subscription)
            tf_state_resourcegroup: $(tf_state_resourcegroup)
            tf_state_storageaccount: $(tf_state_storageaccount)
            tf_state_storagecontainer: $(tf_state_storagecontainer)
