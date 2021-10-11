## Performance testing using JMeter

Performance testing, a non-functional testing technique performed to determine the system parameters in terms of responsiveness and stability under the various workload. Performance testing measures the quality attributes of the system, such as scalability, reliability, and resource usage.
Here we have provided an installation guide for performance testing using JMeter & Taurus tool.

### About JMeter
Apache [JMeter](http://jmeter.apache.org/) is a highly versatile open-source integration testing tool. It is often used as a load testing tool for web applications, 
but can also be used for functional testing and for testing other types of services, such as databases.


### About Tarus

[Taurus](https://gettaurus.org/) is an open-source automation test framework, that can be used in particular to automate JMeter executions. 
Taurus can take an existing JMeter plan and define load profile and assertions through simple configuration. Taurus can export a test report in JUnit format, that can be published to an Azure DevOps pipeline.

### JMeter extension we need to install:

This extension provides the following components:

  1. JMeterInstaller installs JMeter along with a flexible collection of plugins.
  2. TaurusInstaller installs Taurus on a Python environment having version 3.6 or higher.
  3. TaurusRunner runs JMeter or other test plans using Taurus and produces test results and reports.
  
#### Installing JMeter

##### Adding JMeter tool installer task to the Azure Devops pipeline

  1. Search for "JMeter tool installer" and click on "Add"
  2. Select the exact version of JMeter in the version field.
  3. Enter a comma-separated list of JMeter plugins to install in the plugins field.
  
---
Link for JMeter Plugin: https://jmeter-plugins.org/

---
 
#### Add Taurus tool installer 
  
  1. Search for "Taurus tool installer" and click on "Add".
  2. Select the exact version of "Taurus" in the version field. 
  
#### Add Taurus tool runner in pipeline

1. Search for "Taurus tool runner" and click on "Add".
2. In the "Taurus Arguments" field enter a space-separated list of files or websites to test. The following arguments can be passed:
  *  Taurus YAML definition file (recommended), which can reference a JMeter JMX file. Example:
```        
execution:
- scenario:
    script: website-test.jmx
    concurrency: 5
    hold-for: 10s
    ramp-up: 2s
reporting:
  - module: junit-xml
     filename: TEST-Taurus.xml

```
   *  A JMeter JMX file. This is equivalent to the following YAML file:
    
```    
execution:
 - scenario:
    script: my-file.jmx
```    
  * A URL to test, for quick load testing.
   
3. Keep the "JMeter Home", "JMeter Path", and "JMeter Version" fields to their default value.
  
4. The artifacts output directory will contain a report directory with an HTML report.
  
5. Enter a value in the "Report name" field to generate an HTML report. 
  
4. The report will be available as a build artifact in a build pipeline, or the build logs in a release pipeline.
  
  
 
  



