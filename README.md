# ⚡ REACT FLASHCARDS ⚡
&nbsp;
![banner](https://github.com/user-attachments/assets/4eb77910-9c04-4161-98ad-b7014eeb25c6)


## Contents
* [Overview](#overview)
* [Tech Stack](#tech-stack)
* [Running the app](#to-run)
* [Process](#the-process)
* [Take aways](#take-aways)
* [Continued development](#continued-development)
* [Useful Resources](#useful-resources)
* [Screenshots](#screenshots)
* [Authors](#authors)
* [Acknowledgements](#acknowledgements)

# Overview
To build an interactive app using React and Vite.
To follow the design given.
Use state to flip flashcards between question and answer.
To enable users to add questions..



## Tech Stack
🛠️ Node
🛠️ React
🛠️ JSX
🛠️ JS
🛠️ Vite
🛠️ gh-pages
🛠️ Kanban


## To Run

```
npm install
```
```
npm run dev
```

## The Process
### Team Manifesto!
We are a pretty well matched team so we were well aligned on our team values:\
![manifesto](https://github.com/user-attachments/assets/da9cf756-6a9b-4cf8-9b7a-dac3102c1998)
### Initial Planning
You can see from the manifesto that we were all pretty determined to plan thoroughly and stay focused so we could hit the ground running. We looked at our first MVPs, explored options for how we would section our components and moved on to our component and dependency trees.\
![composition](https://github.com/user-attachments/assets/f68e9f91-383e-42f1-8481-85eb6ee4f2f2) ![image](https://github.com/user-attachments/assets/640d76f8-bc91-4801-9a9b-6398686d3912)
![planning](https://github.com/user-attachments/assets/1ee620d8-7fc8-4abf-9976-1c89cc9fa21b)


\
We prepped on how we wanted to log issues and learned a bit about GitHub Projects.
\
\
![issues](https://github.com/user-attachments/assets/fc82ec30-4609-4fc6-be1e-9c33291934ac)\
\
and even had some end game planning sorted!\
\
![overachievement](https://github.com/user-attachments/assets/4cc98caa-49ce-4852-8f3f-766733f335b5)

### Implementing
Using the nifty command ```npm create vite@latest . -- --template react``` we had access to a pre-setup react project. Magic. The only drawback was that it had some css, which was a bit annoying later on; it was set across a few different files already and wasn't the most logical. We removed most of it but the enchanting onHover glow effect on the react logo had to stay!\
\
![files](https://github.com/user-attachments/assets/fe63da5a-aef3-41da-ad0c-c6e12a22ea7f)
\
We took a top to bottom approach, initially plotting out our components.```<aside>This actually led to our first issue...as GitHub or maybe VSC auto tidied the empty files during the initial commit!<\aside>```. Having added our component files back in, (this time with content!) we adulted away the excitement and took just a small chunk of code to begin with. Adding the Header and Footer components was pretty smooth sailing. We did run into a snaffoo where we briefly couldn't get the Header to render...it transpired some excitement had got through and it was one of those 'did we save?' moments, still not much time lost.\
\
Once we had components in place, or prepared for in app.jsx, things got really fun.\
Fortunate that we had encountered the problem of using arrays in updateState the previous evening and that Chris had just gone over the logic too, as it wasn't long for the team between setting up the flashcards individually and automating the process using that knowledge. There were moments of syntax struggle but mostly we all seemed to have really deepened our understanding of prop drilling through previous efforts and mentor assistance! (Thanks for all you do, any School of Code alumni who find themselves here). Some confusion over the plan did show up as we started setting up the handle click function...what exactly were we trying to pass down? Having team members talk it through clarified for everyone and we were able to move on.\
\
![flipper](https://github.com/user-attachments/assets/aefd3b3f-5229-458d-8029-1e11b41f98aa)\
\
The struggle was real while working through the logic for the inputs, we were trying to enable the user to add more card questions of their own. Our difficulties were not helped by confusion over the syntax. Pair programming became pair poring over documentation and still we were stalled. The main concern was how to access the input values when using a submit button. The two bits of documentation that kept popping up were about the ```<form></form>``` tag and the property ```onChange```. It seemed as though the form tag, using a property called ```onSubmit``` would let the submit button take control of the form. We chose to try this out, leaving onChange for later and after some false starts got the cards updating!\
\
![post](https://github.com/user-attachments/assets/b0e1fc6f-6401-4f7e-a712-545d292938be)![submit](https://github.com/user-attachments/assets/1eecf355-49e8-4890-a77d-95db33c6e96e)\
\
We were careful to duplicate our array rather than alter the original and spirits were high with the break through....\
Then we got some bad news. There are two types of forms, controlled and uncontrolled forms, we had not chosen wisely unfortunately, onChange looked like it would have been the way to go. From what we understood however, the problem mostly relates to input validation and helps make password inputs more secure, we decided on this occasion to move on as we aren't passing anything sensitive and were unlikely to in the future. We did open an issue as a stretch goal to review this code.

### CSS
We had conquered our first few obstacles and decided that before tackling deleting cards we should have a change of scenery, literally. We did some initial styling but elements were behaving in unexpected ways; a margin of 1px made an enormous gap for example. Quickly concluding we needed to review the vite-added css we took some time to go over it, considering what if anything to keep. Having tidied house the CSS was easier to tackle, elements were behaving as expected and we could spare time to look into things like, what font was used, link in resources to 'What the Font' a helper to find your font by pasting an image of it.\
We had pair programmed most of the day and for the final stretch we worked on different aspects of the project. CSS overall, CSS flashcards..and this README to help with the presentation!

### GitHub Pages
We thought it would be as easy as usual to display our work on github pages but it actually took the better part of our morning session.
First things first we installed gh-pages package:

```bash
$ npm install gh-pages --save-dev
```
Then updated our package.json to add a homepage url and the commands to add gh-pages branch to the repo which we could use as the file for ghpages to launch from.

```"scripts": {
       ...
       "predeploy": "npm run build",
       "deploy": gh-pages -d dist",
       ....
```

```
export default defineConfig({
  plugins: [react()],
 base: '/week-7-hackathon-cookiemonsters',
});
```
and in our vite.config.js file we added a base (in this case the name of the repo). At this point a branch names gh-pages should have shown up on the github page. It didn't.
We tried every suggestion online, we followed the vite dev documents and github's too and as we were giving up hope we found one page that talked about adding the base to vite.config.js file. The difference was it explicitly said to put the base: command directly above the plugins!

```export default defineConfig({
  base: '/week-7-hackathon-cookiemonsters',
  plugins: [react()],
});
```
Finally, thanks to this internet hero..thank you Rashid Shamloo... everything began to work as intended!\
\
![hero](https://github.com/user-attachments/assets/c4dab885-a81d-4fb3-8bd3-b5045f86881e)

\
Link to the page in useful resources.


### Take aways
- Keeping it simple is great
- Talking through team strengths and weaknesses helped the group dynamic and set us up for success.
- While we are on SoC and can: keep breaking things down and trying out the result, it may not solve your immediate problem but you learn a great deal from the process and often half solve another issue!

### Continued development
Plenty of stretch goals:
* Add sound to card clicks
* Store data in a spearate file...or even database.
* Review the Form component
* Look into adding a favicon
  

### Useful resources
https://vitest.dev/
\
https://react.dev/reference/react-dom/components/input
\
https://www.myfonts.com/pages/whatthefont
\
https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf

## Screenshots
![pages](https://github.com/user-attachments/assets/1351b99c-357e-4d0b-9ae5-614737e298d8)\
\
![image](https://github.com/user-attachments/assets/b59e0f6d-3885-4ff2-9d56-18639cabfdfb)\
\
![image](https://github.com/user-attachments/assets/da8033f5-18a8-4805-9572-e92fe9ddfa66)\
\
![image](https://github.com/user-attachments/assets/0d5b68a6-b75b-45ea-bfbc-707fcfe8faa4)





\
![Header](https://github.com/user-attachments/assets/5569e343-e4ad-442f-9136-e71c397f02b8)\
\
![Snail](https://github.com/user-attachments/assets/73831c57-4ad6-46ca-8e79-5091c24c70b6)



## Authors

- [@Zsolt-qwerty](https://github.com/Zsolt-qwerty)
- [@universeluke](https://github.com/universeluke)
- [@Holl4444](https://github.com/)

  
## Acknowledgements

 - [School of Code](https://schoolofcode.co.uk/)


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
