## How to block pull request using Penetration testing?

This guide explains how you can block the Pull request when we are getting some failed scenarios? For Penetration testing we are using OWASP ZAP. For installation process of OWASP ZAP [click here](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-docs-poc-he-nilo/browse/getting-started/how-tos/testing/pen-testing.md)

For blocking Pull request the following steps has been followed:

1. Using PowerShell script generate the report in XML file.
2. Using relative xpath fetch the failed value from the generated XML file.
2. Using if condition validate the number of failed test case.
3. Use condition "if failed > 0" then block pull request.

```

if([int]$failed -gt 0)
{
 $state = "failed"
 $Description= "OWAP ZAP check has failed."
}
```

### Steps to follow

1. Add a power shell (.ps1) file in the script folder of the .azurepipelines folder.

2. In pipeline add the Powershell task.

```
- task: PowerShell@2
      displayName: 'Blocking Pull Request'
      enabled: True
      condition: always()
      inputs:
            
        filePath: '%PATH TO POWERSHELL SCRIPT%'
         arguments: '-FilePath "$(system.defaultworkingdirectory)/Converted-OWASP-ZAP-Report.xml"  
        -TFSCollectionUrl "$(System.TeamFoundationCollectionUri)" -TeamProject "$(System.TeamProject)" 
        -RepoName "$(Build.Repository.Name)" -BuildReason "$(Build.Reason)" -AccessToken "$(System.AccessToken)"'

```

3. Save the pipeline.

4. Go to the repository select the branch.

5. Click on the ":" available in the right side of the screen.

6. Select branch policies from the option list.

7. Go to build validation.

8. Click on "+" Icon.

9. Select your pipeline from the dropdown.

10. Click on save button.

11. Create the Pull Request.

12. Wait for the build completion.

13. Using step 4,5 and 6 go to Status Check.

14. Click on "+" icon.

15. Click on the dropdown.

16. "OWASP-ZAP/pr-status" option should be available.

17. Select "OWASP-ZAP/pr-status" option.

18. Create a new pull request.

19. Once the build will be completed the pull request will get blocked( If failed > 0)).

Note: For getting the .ps1 file, please refer on the below link: [owasp-zap-block-pr.ps1](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse/.azurepipeline/scripts/owasp-zap-block-pr.ps1)
