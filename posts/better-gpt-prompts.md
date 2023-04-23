---
title: "Make Your ChatGPT Smarter! It's Dumb"
subtitle: "Master the Art of Writing Effective Prompts for ChatGPT"
date: "2023-04-24"
---


Writing better prompts is a crucial skill for every ChatGPT user. To help you become a pro at crafting effective prompts, here are some tips adapted from OpenAI's original article on prompt engineering:

(Keep in mind, this is originally for the API but I have extracted the parts that are applicable to ChatGPT Prompts)

Link to original article > [read full here](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api) 

1. **Separate context and instruction**: Clearly distinguish between context and instruction to make it easier for ChatGPT to understand your request.

    Less effective ❌:
    ```
    Summarize the text below as a bullet point list of the most important points.  
    {text input here}
    ```

    Better ✅:
    ```
    Summarize the text below as a bullet point list of the most important points.  
    Text: 
    [text input here]
    ```

2. **Be specific, descriptive, and detailed**: Provide clear instructions about the desired context, outcome, length, format, style, and other aspects of your request.

    Less effective ❌:
    ```
    Write a poem about OpenAI.
    ```

    Better ✅:
    ```
    Write a short inspiring poem about OpenAI, focusing on the recent DALL-E product launch (DALL-E is a text to image ML model) in the style of a {famous poet}
    ```

3. **Clearly define the desired format**: Present specific format requirements for more accurate and programmatically-parseable responses.

    Better ✅:
    ```
    Extract the important entities mentioned in the text below. First extract all company names, then extract all people names, then extract specific topics which fit the content, and finally extract general overarching themes.

    Desired format:  
    Company names: <comma_separated_list_of_company_names>  
    People names: -||-  
    Specific topics: -||-  
    General themes: -||-  

    Text: {text}
    ```

4. **Teach it with examples**: Use zero-shot or few-shot examples to help ChatGPT understand your requirements better.

    Zero-shot ✅:
    ```
    Extract keywords from the below text.  

    Text: {text}  

    Keywords:
    ```

    Few-shot ✅:
    ```
    Extract keywords from the corresponding texts below.  

    Text 1: Stripe provides APIs that web developers can use to integrate payment processing into their websites and mobile applications.  
    Keywords 1: Stripe, payment processing, APIs, web developers, websites, mobile applications  
    ##  
    Text 2: OpenAI has trained cutting-edge language models that are very good at understanding and generating text. Our API provides access to these models and can be used to solve virtually any task that involves processing language.  
    Keywords 2: OpenAI, language models, text processing, API.  
    ##  
    Text 3: {text}  
    Keywords 3:
    ```

Example Prompt  :

 ```
You have been provided with a research paper that you need to summarize. Your objective is to understand the key findings, arguments, and implications of the paper and present them in a clear, concise, and engaging manner for a non-specialist audience.

Begin by reading the research paper carefully, focusing on the abstract, introduction, conclusion, and key sections. Identify the main research question, the methodology used, and the most important findings or conclusions.
Question: What is the main research question of the paper?
Answer: {Insert the main research question here}

Analyze the structure and organization of the paper, noting how the arguments are developed and supported. Identify any gaps, limitations, or areas for future research mentioned by the authors.
Limitations and future research: {Insert limitations and future research here}

In your summary, provide an overview of the paper, briefly describing the research question, methodology, and key findings. Ensure your summary is concise, clear, and accessible to a non-specialist audience.
Summary: {Insert a concise and clear summary of the research paper here}

Reflect on the broader implications of the research paper. Consider how the findings contribute to the field of study, any potential practical applications, or how the research might impact policy or society.
Implications: {Insert the broader implications of the research paper here}

Lastly, identify any questions or concerns that you have about the research paper, or any aspects that you would like to explore further.
Questions and concerns: {Insert your questions and concerns about the research paper here}
    ```