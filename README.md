# Foliotopher

A minimalistic portfolio website.

<img src="https://firebasestorage.googleapis.com/v0/b/foliotopher.appspot.com/o/folio.jpg?alt=media&token=c87aad39-8a69-4b27-8a6e-f619de8dfc9c" width="200">

## Technologies

1. Redux
2. React (create-react-app)
3. React Router
4. Radium CSS
5. Firebase by Google

## Challenges

Being fairly new to Redux and React, there were a lot of challenges in putting this portfolio together. I spent the most time on actually planning and designing each React component's behaviour as well as differentiating between whether it should be a presentational component or a container component for Redux. 

Other challenges include using inline styling with Radium CSS. On desktop, the web browsers had no issues with Radium's keyframes animations. However, animations were not working properly on mobile browsers. I finally resorted to plain old CSS for keyframe animations and using classNames on the elements where applicable. Not ideal, but it works.

Perhaps the most difficult challenge was in figuring out how to deploy a create-react-app with React Router on Heroku. After hours of tutorials I finally stumbled upon a medium article which solved all production problems! (Check CRAE in Links section below)

## Final Thoughts

I really like the idea of using Redux with React and after seeing how these two work together so seamlessly, it makes so much sense to be using Redux to manage application state. Needless to say, I would be exploring and building more projects using Redux and React.

The one thing missing from this project is TESTING! I am still trying to wrap my head around testing for both Redux and React but I can imagine how testing would be useful for a larger scale project later on.

For future features, I might include a blog section but for now I am quite happy with how the portfolio turned out.

Thanks for reading and if you have any questions email away!

## Links

[Foliotopher] (https://hanernlee.io)

[CRAE] (https://originmaster.com/running-create-react-app-and-express-crae-on-heroku-c39a39fe7851)