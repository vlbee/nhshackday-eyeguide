# Emergency EyeGuide

Developed at London NHS Hackday 2018, between 30th June 2018 - 1st July 2018, between three developers, two ophthalmologic doctors that represented an NHS Trust and others.

Our group created a reference app to help users find relevent management clinical guidelines at their fingertips.

#### PLEASE NOTE
This is a prototype project, not approved for clinical use. 

## Running Locally

1. Make sure that you have the Gatsby CLI program installed using `npm install --global gatsby-cli`
2. Clone this repo `git clone https://github.com/vlbee/nhshackday-eyeguide.git` and navigate into it `cd nhshackday-eyeguide`
3. Install the required dependencies `npm i`
4. Run `gatsby develop`
5. Access the site at `http://localhost:8000/`

## Tech Stack

Built with **[Gatsby](https://www.gatsbyjs.org/)**, a static site generator for React with data in Markdown file format.
`styled-components` and `normalize.css` used for styling.
**GraphQL** used to process the markdown files. 

Possibilities for further development include converting the site to Progressive Wep App for offline usage on mobile devices and integrate GUI CMS to add and edit content. 

## The Challenge

The first wednesday of August is called Black Wednesday.  This is the national junior doctor migration day to a new hospital or straight off the boat from medical school.  It is the worst day to work as a doctor, and the worse day to be sick as a patient.  In the UK, each trust, hospital, clinic, subspecialy clinic have their own set of guidelines.  These meticulously designed, evidence based clinical treatment guidelines SHOULD be valuable information that saves patients lives, or sight in our case, but its presentation is so cumbersome it is often unused.  Leading to unstandardised care and managment planning for patients.  Especially on Black Wednesday.

Clinical Guidelines used in NHS Trusts are usually incredibly long, in PDF format and to access, requires navigating through different links on the trust intranet on a trust computer (after logging in).

## Our Solution

At the London NHS Hackday 2018, our group created **EyeGuide** a reference app to help users find relevent management clinical guidelines at their fingertips.  It will enable junior doctors, new staff, non-UK trained doctors to manage patients in a standardised, safe way, in the most stress free way possible. 
  -  It involves quick two click access to the vital information they would need to treat and plan managment for patient with sight or life threatening eye problems. 
  - We focused on a Clinical Guidelines focusing on ophthalmology as an example.
  
  |                       Guidelines Index                        |                     Guidelines Page                     |
| :-------------------------------------------------------: | :---------------------------------------------------------: |
| <img src="https://i.imgur.com/GkTmNxD.png" align="left" width="260" > | <img src="https://i.imgur.com/0OSYiPF.png" align="left" width="260" > |



### Aims of the solution:

- User friendly
- The user is able to access the most relevant information within 2 clicks
- Can be easliy edited and updated by non-coding trained clinicians when guidelines are available
- Provide Key prompting reminders for clinicans for to sight threatening diagnoses 
- Signpost the clinictian to relevent reference information if needed
- Contact information of support availabe for the lone doctor working in Emergency Eye clinic.  WHo to call and how to arrange urgent follow-ups.  Minimising the stress of unnecessary admin work.  Allowing the doctor to doctor and see patients.
- Adhere to the approved trust guidelines rather than relying on google/web searches due to convenice.
- Collect data on which guides are most used and plan teaching/ support sessions tailored to each cohort of junior doctors.  To identify short-falls in the current guideline or teaching programs.
- Usable on mobile device and with poor or no internet connectivity

#### MVP Target User

Dr Elizabeth is a new Junior doctor starting at a new trust who drew the short straw to be oncall on her first day.  Her previous training enables her to make correct clinical diagnosis, but she is not exactly sure about the local guideline managment plans.  Her trust indcution told her to look on the intranet on the trust computer, but of course her computer log-in is not working. She resorts to phoning around her collegues and googling on the web in hope to find some guidance; while the patients pile up outside her clinic door and its now 11pm.  She just want a easy app on her phone that gives her the core information she needs to manage the patient infront of her correctly.

### User Journies

#### Maintainer
Maintainer can easily write and upload Markdown document versions of the Clinical Guidelines (either using a PDF to markdown generator, or manually), which are automatically generated into HTML webpages and added to the live web app. 

#### User
Dr Elizabeth pre-downloads the app on her phone before her first day, logs-in and within two clicks she is able to get the information she needs to do her job safely and stress free.


#### User Stories

As a user, I can: 
- Download the **EyeGuide** app as part of the pre-employment induction.
- Register using a nhs.net email account that all doctors in the UK will have.
- View the vital guideline information for the Trust I am practicing at. 

As a maintainer I can:
- Upload a markdown file, that will be automatically processed by the app to update the app.

## Wireframes

The original wireframes: 
  |                       Guidelines Index                        |                     Guidelines Page                     |
| :-------------------------------------------------------: | :---------------------------------------------------------: |
| <img src="https://i.imgur.com/9xk7RMk.png" width="50%" > | <img src="https://i.imgur.com/CyCihX5.png"  width="50%" > |



Snapshots of what was built:
  |                       Guidelines Index                        |                
| :-------------------------------------------------------: | 
| ![Navigation](https://i.imgur.com/E8LXpkq.png) |




