# Contributing New Content

---
**Table of contents**
* [Background](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#background)
* [Writing new guidelines in Markdown](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#writing-new-guidelines-in-markdown)
* [Navigating to the guidelines folder](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#navigating-to-the-guidelines-folder)
* [Adding a new Markdown file for a new condition](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#adding-a-new-markdown-file-for-a-new-condition)
* [Editing an existing condition](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#editing-an-existing-condition)
* [Deleting a file](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#deleting-a-file)
* [Adding a new category](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#adding-a-new-category)
* [Questions or Problems?](https://github.com/vlbee/nhshackday-eyeguide/blob/master/CONTRIBUTING.md#questions-or-problems)
---

## BACKGROUND

This is a guide on how to add or update Guideline markdown content to [Eye Guide](https://github.com/vlbee/nhshackday-eyeguide/), which will be automatically generated into new guidelines pages on the [Emergency Eye Guide website](https://emergency-eye-guide.netlify.com/).
- **Conditions** are grouped by **category**. The category names will be listed on the first page of the application.
    - On clicking on a category, a list of all the conditions within that category are listed.
    - On clicking of a condition name, the written guidelines for that condition will be shown.
    - The written guidelines has a table of contents at the top that links to all the section headings listed in the document.

## WRITING NEW GUIDELINES IN MARKDOWN

⚠️ Ensure you use the [TEMPLATE](https://raw.githubusercontent.com/vlbee/nhshackday-eyeguide/master/TEMPLATE.md) format provided. 

1. New guidelines need to be written using Markdown. Markdown is a way to write content for the web, that is regular text with some symbols (e.g. asterisks ( * ) to indicate certain things such as bullet points).
    * To learn writing in Markdown follow [this tutorial](https://www.markdowntutorial.com/)
    
2. [HackMD](https://hackmd.io) is a good site that allows you draft content in Markdown.
    * We recommend using it to prepare your drafts or update drafts of existing guidelines, and only upload them to Github when the text is ready to go live on the website.
    * HackMD also autosaves, and you can share the link to anyone who can edit the same file. Ensure you don't lose your text by saving the link, or signing in using a [GitHub account](https://github.com).

3. ⚠️The content structure of your markdown **must match the format of this [TEMPLATE](https://raw.githubusercontent.com/vlbee/nhshackday-eyeguide/master/TEMPLATE.md)** - copy and paste it to the a new [HackMD note](https://hackmd.io) to get started.
    * **Ensure the very top meta-data section between `---` includes:**
        * `title: Name of the condition`
        * `date: "2017-08-21"` - this date will appear at the bottom of your draft as the *Last Updated -date-*. Must be in `YYYY-MM-DD` format and in quotes.
        * `category: ["name of the category"]` - must be lowercase, in quotes and square brackets. 

<img src="https://i.imgur.com/xCGAKr7.png" width="50%" style="display: block; margin: 3rem auto;"/>


*NOTES:*

* The catergory name must be all in lowercase. Ensure the category matches exactly for all guidelines meant to appear in the same category.
    * Currently (as of 29/07/2018) active options are: `adnexal`, `external`, `glaucoma`, `medical`, `neuro`, `pediatrics`, `retina`, `trauma-infection`. 
    * Categories as they appear on the website are based on these category tags, NOT the GitHub category folder name. 

* You do not need to add the condition again in a heading, since the application will use the title in this top meta-data section to generate it automatically.
* Any content underneath the meta-data section can be written in Markdown (go crazy with Markdown here if you like - bullet points are always handy!).
    * *N.B. The application will automatically generate a table of contents at the top of the page (that links to the appropriate sections) using the Headings (indicated by the Markdown hashtags - #)*
* When copy-pasting from `TEMPLATE.md`, ensure you are copying the *raw* text or follow this [link](https://raw.githubusercontent.com/vlbee/nhshackday-eyeguide/master/TEMPLATE.md) to go direct to the raw text. 

## NAVIGATING TO THE GUIDELINES FOLDER

Navigate to [the Eye Guide GitHub code repo](https://github.com/vlbee/nhshackday-eyeguide)

1. After navigating to [the Eye Guide GitHub code repo](https://github.com/vlbee/nhshackday-eyeguide), you will encounter all the files that make up the application: ![View of the Githb page](https://i.imgur.com/jHO4Adz.png)


2. Click into the `src` folder.

3. Next, click into the `pages` folder.

4. Finally click on the `guidelines` folder (alternatively this is the [direct link to this folder](https://github.com/vlbee/nhshackday-eyeguide/tree/master/src/pages/guidelines)). You will see a list of folders for each condition **category**.
![the guidelines folder](https://i.imgur.com/k6WXZ2a.png)⚠️**This is the location of the guidelines content and only folder you should be modifying.**

## ADDING A NEW MARKDOWN FILE FOR A NEW CONDITION

1. Ensure you have navigated to the [guidelines folder](https://github.com/vlbee/nhshackday-eyeguide/tree/master/src/pages/guidelines).

2. Have your clinical guideline document ready to upload, written using **Markdown** - as instructed above (in the section "Writing new guidelines in Markdown"). 

3. Back in the Github repo, inside the `guidelines folder`: click into the relevant category that you'd like this new condition to be listed under. In this example it will be the `adnexal` category, which will list a document for each of the other conditions within the same category.
![example category](https://i.imgur.com/ImLSwrs.png)

4. In the top right, click the **'Create new file' button** which will bring you to this page:
![uploading page](https://i.imgur.com/gHgfxvw.png)

5. ⚠️ In the **"Name your file" input box** put the condition in the appropriate casing, and **end the name with the markdown extension: `.md`.**
    * If the condition consists of more than one word use underscores e.g. `Preseptal_orbital_cellulitis.md`
6. Copy and paste the Markdown text from your HackMd draft into the file (**under "Edit new file"**), so it will look like:
![Adding a Markdown file](https://i.imgur.com/J5ETnaH.png)

7. Now scroll down to the bottom of the page to the **"Commit new file" section.**  
    * Add a title to the action of uploading the file (e.g. "Create Entropion.md"). 
    * Ensure you select `Commit directly to the 'master' branch`
![](https://i.imgur.com/dRaETg2.png)

8. Click the green **"Commit new file" button.** 
9. Once the new file is commited, the website itself should automatically update after a few minutes and it should include the new guideline under the appropriate category. Please wait at least 15min for the website to update. 


## EDITING AN EXISTING CONDITION

1. To edit an exisiting condition that already exists, navigate to the `[name of condition].md` file.
2. Click on the title of the condition, that will open the file:
    ![Editting an existing condition file](https://i.imgur.com/qYy0VnR.png)
3. Click on the pencil icon on the top right (it will say "Edit this file" when you hover over the icon)
4. You can now edit the text within the file, or copy-paste the contents into a HackMD file for more extensive amends.
5. Whenever you update a file, we advise you update the `date` meta-information at the top of the markdown file. 
6. Once done, scroll to the bottom of the page to the "Commit changes" section.
7. Add a title for the update (eg. "Update Entropion.md" and optional description, then click the green 'Commit' button to update the file, ensuring you select `Commit directly to the 'master' branch`.
8. It should now be updated!

## DELETING A FILE
1. Navigate to the file that you want to delete, and click on the top right corner (the 'dustbin' icon)
2. Scroll to the bottom of the page, add a title (eg. "Delete Entropion.md" and and click the "Commit" button, ensuring you select `Commit directly to the 'master' branch`.
* *NB: If you want to delete an entire category (i.e. a whole folder), delete all the documents within the folder, and an empty folder will disappear automatically.*

## ADDING A NEW CATEGORY
⚠️ **You must have a written up MarkDown condition under this category**
1. Ensure you are in the `guidelines` folder.
2. Click on the "Create new file" grey button on the top right.
3. Type the name of the new category in the "Name your file" input box.
    * If the name of the category contains more than one word, use underscores. Ensure casing is correct.
4. **After typing the new category name, add a forward slash - the "/" key.** This will automatically add a new folder with the category name, and now in the next "Name your file" input box put the name of the new condition and follow the steps above (from step 6 onwards of the "Adding a new markdown file for a new condition" section).
    ![Example of new category addition](https://i.imgur.com/wbmqUiD.png)

## QUESTIONS OR PROBLEMS?

Contact Helen [@helenzhou6](https://github.com/helenzhou6) (helen.zhou6@gmail.com) or Vanessa ([@vlbee](https://github.com/vlbee)).