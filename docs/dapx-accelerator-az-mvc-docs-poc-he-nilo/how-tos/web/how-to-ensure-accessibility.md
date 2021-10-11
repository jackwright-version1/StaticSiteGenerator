# How to Ensure Accessibility?

Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more accessible. Following these guidelines will make content more accessible to a wider range of people with disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement, speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines will also often make Web content more usable to users in general.

Source: [W3C](https://www.w3.org/TR/WCAG21/)


### Tools for Testing Accessibility

**1. Google Lighthouse**
* Open Developer tools in Google Chrome Browser
* Go to Lighthouse tab
* Select Accessibility checkbox
* Select a device type
* Click on "Generate Report"

Google Lighthouse will give an accessibility score out of 100.


**2. Axe Dev Tools**
* Go to [Google Chrome Web Store](https://chrome.google.com/webstore/category/extensions)
* Search for Axe Dev Tool
* Add it to your Chrome Browser
* Open Developer tools in Google Chrome Browser
* Go to Axe DevTool tab
* Click on "Scan All of My Page"

It will give you a list of accessibility errors in your application.


**3. WAVE by WebAIM**
* Go to [Google Chrome Web Store](https://chrome.google.com/webstore/category/extensions)
* Search for WAVE Evaluation Tool
* Add it to your Chrome Browser
* Right click on your web application
* In the context menu click on "WAVE this page"

It will give you a list of accessibility errors in your application.


**Note**

Although these tools can test most of the accessibility issues, but a manual check is also necessary. A quick reference on WCAG 2.1 checklist can be found at [WCAG2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
<br/><br/>
### Blocking Pull Request in CI/CD Pipeline

To make sure your application is accessible, we have implemented Google Lighthouse Accessibility check in our CI/CD Pipeline. You can configure a threshold value (default is 90) to ensure your pull request gets blocked if the score is below that threshold value.

The .ps1 files to perform above steps can be found here. [lighthouse-install](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse/.azurepipeline/scripts/lighthouse-install.ps1), [lighthouse-compare](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse/.azurepipeline/scripts/lighthouse-block-pr.ps1)

The YAML file to perform accessibility testing steps is found here [lighthouse.yml](https://git.version1.com/projects/VDAPX/repos/dapx-accelerator-az-mvc-app-poc-he-nilo/browse/.azurepipeline/templates/lighthouse.yml)


