---
title: "Building VocabVerse: Daily Journal"
subtitle: "My attempt at building a tool to help me study for GRE and take part in backdropbuild"
date: "2023-11-06"

---


Hello Everyone!

I'm embarking on a journey to take the GRE, which has inspired me to develop an app called VocabVerse. Building this as a part of the 4-week accelerator program, [backdrop build](https://backdropbuild.com/). 

Inspirations: I've drawn inspiration from platforms like Obsidian, and the Word of the Day app.

Competitors: All test prep companies, magoosh, vocabulary apps, Quizlet

My aim is to create a fun and engaging app for vocabulary learning!

I've decided to document my VocabVerse journey here:

**11/09:** Today, I focused on WordNet. Opting for larger NLP models seemed like overkill for this task. I believe the success of this product will hinge on its user experience. The goal is to meld Obsidian's graph view with a user-focused learning experience, utilizing modern AI applications.

**11/10:** Had an enlightening conversation with two fellow builders during a talk. One is developing a multilingual MBA program app using open-source materials, and the other is working on a crypto-based health records system for privacy-concerned doctors. The latter, though a bit complex and proprietary, was particularly intriguing. One of them uses Obsidian, which aligns well with my project. It's time to get cracking on the demo.

**11/11:** Watched this insightful video: [Link to Steve's Video on Builder.io]. It reinforced my belief in using AI judiciously – it's crucial to distinguish my product from something that could be generically created by OpenAI. It's not just about feeding data into a black box; it's about creating something unique and tailored.

**11/12:** Completed the first week's update!

**11/14:** Reflecting on the relatively slow progress last week, I'm keen to follow a tutorial and start building more rigorously. React-force graph seems like the right choice. Also, inspired by the Word of the Day app, I plan to incorporate beautiful visuals using Stability AI. Need to explore how Backdrop can aid in this.

**11/15:** Okay we are going to continue building out the ui with Josh. What a video, built out a nice landing page, added authentication using Kinde. Also tested Dall-E outputs for images and sample sentences, will test stability as well. Want to get to developing the dashbaord by weekend. Will try build out the other parts and setup a backend by weekend! Pushing changes to a new repo - vacabverse-v2. Once I get to the dashboard, will merge both the repos. (not the best practice)

<img src="\images\vocabvers-1115.png" class="w-64 rounded-xl">

**11/16:** Okay this is awkward. I was coding last night and I just went online and started looking for user reactions to how everyone studies for the GRE and I'm realising that the vocabulary building market is just too saturated and there are some very beautiful apps out there. No doubt my app might be better but I want to make something that I myself will use but also useful to others. One thing I am using LLMs for is my MBA prep and I had this idea long back of helping students navigate through this jhourney for minimum price. MBA is just super expensive, everything from consultants to application costs, so if I can proiovide a service to just help people navigate through this journey, liike a perosnal MBA AI integrated notion, that would actually be very helpful for me as well and an interesting project to build. Let's see, will continue building this product and backend but damn it, I might pivot. Let's see. Also looked into the event sponsors and I think pxie can be perfect to build a chatbot.

https://shop.careerprotocol.com/ai-powered-school-scouting-toolkit/



**11/17:**  So I had applied to Y combinator with this nascent idea but got my rejection letter today! Great, but I have an idea now which might actually get me excited to work on now. I AM GOING TO MAKE A GAME!! The MBA idea is not bad to be honest, but given all the frustrations in my real-life regarding applications, I dont want to spend more time on it. I want to make something fun and omg as fate would have it I stumbled upon this video : https://www.youtube.com/watch?v=yP5DKzriqXA&t=6902s&ab_channel=ChrisCourses

How do such legends exist! Will build out the idea soon! Actually excited about this now.

<img src="\images\vocabvesrse-game-character-111724.png" class="w-64 rounded-xl">


**11/18:** PIVOTT!

<img src="\images\pivot.gif" class="w-48 rounded-xl">


We are building vocabverse the game now 😎 Also got in touch with Stability team who were kind enough to send me $50 credits for their platform. The aim is to create the basic game in the next 2 days and then work on building the model to create custom ~~pokemons~~ 'wordlings' 😅 Gotta catch'em all! 

<img src="\images\vocabvesrse-game-111824.png" class="w-64 rounded-xl">

**11/19:** Ughhh, I just want to deploy this in my react app and although it worked on my local getting this stupid Kinde auth error which is bothering me so much that i spent the last 45 mins on it. Reached out for help on the joshtriescoding discord 😅 I really hope I can complete this build on time, gonna be a busy day with the India world cup finals so might not make much progress today. Also need to upgrade landing page and generate a cool pixelart logo!

<img src="\images\kinde-error.png" class="w-64 rounded-xl">

Update: You gotto be kidding me -_- they updated a new version of the SDK v2 which has different syntax. The quick start wasn't updated but kudos for their support eam to reach out on a sunday (thanks andre!). Well lesson learnt! **Check latest versions and docs.**

<img src="\images\kinde-chat.png" class="w-48 rounded-xl">


**11/20:** Okay no time this week! I am going to work on developing our wordlings today. Was looking into fine-tuning Stable Diffusion XL using open source datasets. Luckily pokemon datasets are pretty common, found one really nice pokemon pixel art dataset, will credit the author. Downloaded ComfyUI as started playing around with it but finally decided to go with  Replicate beacue I dont have time and want to build some proof of concept, and I have worked with replicate before. Let's hope for the best.


Copy the Raw URL: The URL in the address bar while viewing the raw file is the direct link you need. It should look something like https://raw.githubusercontent.com/user/repo/branch/path/to/wordlings_dataset_v1.zip.


**11/21:** Okay so I was up late last night trying to perfect the whole wordlings generation process and we have a GPT bot to generate prompts and meanings, and a stable diffusion model to generate them. Here's our Gen 1 wordlings, still feel the model is overfitting on the training data, need to fine tune a little

<img src="\images\wordling1.png" class="w-24 rounded-xl">
<img src="\images\wordling2.png" class="w-24 rounded-xl">
<img src="\images\wordling3.png" class="w-24 rounded-xl">


**11/22:** Busy day at work today, couldnt make much progress but working on coding up the game now. Created boundaries and logics. Coding a game is fun!

<img src="\images\vocabverse-2.png" class="w-24 rounded-xl">



**11/23 - 11/26:** Friends wedding break, need to buck up and work from tomorrow and get this done. Flight got delayed on 26th, went through extreme turbulence somehow reached back safe, 2 days to go! Let's go

**11/27 - 11/29** OMFG WE SOMEHOW DID IT! I  did not even get time to update the blog over the last couple of days. It's just been intense coding sessions. NextJS randomly gave client side errors and chunks errors at the last minute, downgraded to 14.0.0. Kinde gave me callback URI errors at the last minute, had to create a new Kinde url and update. Used Loom for the first time to create a demo which I completed an hour before the deadline. This was just crazy for me. I know I could have done much much more but I hope the team sees the potential in the idea. 

Final Demo Video here : https://www.youtube.com/watch?v=xukst4crr20&ab_channel=Vocabverse

Final URL : https://www.vocabverse.games/
(ignore lots of bugs and no responsiveness at all)

<img src="\images\build-v2-certificate.png" class="w-24 rounded-xl">

