# API-Powered Personalization L778

## Table of Contents
1. [Setting Up the Environment](#setup-up-the-environment)
2. [Lesson Overview](#overview)
3. [Create an Integration](#create_an_integration)


## Setting Up the Environment

At the end of this lesson, you will:
* [TODO]

## Lesson Overview

[TODO]

1. Using Visual Studio Code, we will begin by cloning all the content on GitHub from within the editor.  Begin by opening the editor, and clicking on the command palette in the lower left-hand corner.  And, from the drop down at the top of the screen choose or type in Git:Clone.

![Visual Studio Code](/images/gitclone.png "Visual Studio Code")

4. You will provided you with a prompt for the URL to the repository.  You will be able to find this on by scrolling up on this page.  Toward the top of the page you will see a green button that says "Clone or download".  Click on this and you will see a modal with the repository URL copy that and put it into the prompt within Visual Studio Code.

![Repository](/images/repo.png "Repository")

5. You should now have a project on the left-hand side with all the assets for this exercise.

6. Once you have all the assets, [TODO]

##Create an Integration

In order to use any of Adobe's APIs, you must authenticate usin a JSON Web Token.  A JSON Web Token (JWT) is an open standard for securely transmitting information between endpoints as JSON object.  This means that for you to query any data from any Adobe solution that requires authentication, then to make those call you need to have token and include that in the payload.

## Setting up Integration

1. For this lab, we've already created an integration.  Each lab participant has a integration created.  Navigate to the [Adobe/IO Console](https://console.adobe.io) and choose the integration with your lab number.

[TODO: Include pic]

2. Within our project, you will find an action within the action folder called `getToken`.  Open the `index.js` file within that folder.  This is a library that we will be using throughout our project.

[TODO: include the code]

3. This library uses module created by the Adobe IO engineering team called `@adobe/aio-lib-core-ims`.  This encapsulates some of the heavy lifting for creating token.  Within our library, you will find a config variable that is set to a JSON object.  Let's populate that object.  

4. The first item we need is the callback URL.  You can find this within the JWT tab.  This will be the same for everyone so its included.  

![JWT Tab](/images/jwt.png "JWT Tab")

5. Next let's move to the client ID.  The client ID is also the API Key and can be found on the overview tab.

[TODO: Include screenshot of client id]

6. On the same screen we can grab the client secret. Click the button that say "Retrieve Client Secret".  Once that appears on the screen you can copy that value and paste it within your code.

[TODO: client secret]



