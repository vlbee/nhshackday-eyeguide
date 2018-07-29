# Contributing New Content

---
**Table of contents**
* [Background](#BACKGROUND)
* [Writing new guidelines in Markdown](#WRITING-NEW-GUIDELINES-IN-MARKDOWN)
* [Navigating to the guidelines folder](#NAVIGATING-TO-THE-GUIDELINES-FOLDER)
* [Adding a new Markdown file for a new condition](#ADDING-A-NEW-MARKDOWN-FILE-FOR-A-NEW-CONDITION)
* [Editing an existing condition](#EDITING-AN-EXISTING-CONDITION)
* [Deleting a file](#DELETING-A-FILE)
* [Adding a new category](#ADDING-A-NEW-CATEGORY)
* [Questions or Problems?](#QUESTIONS-OR-PROBLEMS)
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
