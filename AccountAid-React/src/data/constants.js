export const PERSONAS = [
    {   
        id: 1, 
        name: 'Jim', 
        description: 'Jim, Age 53, has been a farmer for most of his life in Corydon, Indiana. He has lived with his wife and has two kids with one in college. He only has a high school diploma because he had to inherit the farm when he turned 18. He has always done things on paper and is skeptical of technology and is worried about his information being leaked. However, Jim hates spending time looking through his ledger but does like to be organized. ',
        idea: 'Jim heard about using online banking through his children who are encouraging him to join the 21st Century. He might use a budgeting app to keep track of how much he spends on groceries a month. Jim and his wife often spend more than they should at the Cracker Barrel on Sunday mornings. Jim’s wife says they need to keep in mind they need to stop spending so much money. With his children’s advice, Jim may be persuaded to use AccountAid’s BudgetBuddy feature to help ease his partner’s anxiety. However, Jim is a firm believer in using cash and checks for payments.',
        outline: 'Jim, Age 53, has been a farmer for most of his life in Corydon, Indiana. He has lived with his wife and has two kids with...',
        img: 'Jim - Persona 1.png',
    },
    {
        id: 2, 
        name: 'Kris', 
        description: 'Kris, Age 27, is a free-lance artist in Reno, Nevada. They moved to Reno after graduating college with a degree in Fine Arts in 2018 to pick up more art jobs. They live alone in a one-bedroom apartment with their cat, Michelangelo. Kris has an inconsistent income due to not having back-to-back jobs. Kris has a hard time making ends meet because of this. They are interested in using technology to manage their commissions from customers. ',
        idea: 'Kris has heard on social media about how useful digital wallets are for small businesses. They want to look into setting up a business profile to accept payments from customers. Kris needs to pay their friend, Taylor, for a scratching post that was bought for Michelangelo. After seeing an advertisement for AccountAid on Twitter, Kris is interested in using their Digital Wallet feature to pay Taylor from their next payment from a customer. ',
        outline: 'Kris, Age 27, is a free-lance artist in Reno, Nevada. They moved to Reno after graduating college with a degree in...',
        img: 'Kris - Persona 2.png',
    },
    {
        id: 3, 
        name: 'Timmy',
        description: 'Timmy, Age 20, is a struggling college student in Business Administration at THE Ohio State. Originally from Columbus, Ohio, Timmy has been struggling to find funds even though he works a part time job and a work-study. He is so busy with school and work he rarely thinks about staying on budget. His parents are tired of him calling home asking for more money and he wonders if he will always be paying off his student loans. Timmy is well versed with technology as his college career demands it as well as growing up with it. However, Timmy is dissatisfied with his banks web application as it feels like it was made in the 90s and is usually difficult to navigate. ',
        idea: 'Timmy would use AccountAid for the BudgetBuddy feature as well as being interested in paying his friends instead of using his bank’s application. Timmy appreciates being able to see graphics and reports on what exactly he is spending his money on. He likes being able to put a cap on his spending per month as after a long class Chick-fil-a is hard to say no to. Timmy is glad that he won’t have to switch banks to get a better experience as with AccountAid he can just hook his banking information into the system. ',
        outline: 'Timmy, Age 20, is a struggling college student in Business Administration at THE Ohio State. Originally from Columbus...',
        img: 'Timmy - Persona 3.png',
    },
    {
        id: 4, 
        name: 'Jacob',
        description: 'Jacob, Age 28, is an electrical engineer in Lexington, Kentucky. He moved to Lexington from Indianapolis in 2015 after graduating from college with a degree in Electrical Engineering. He lives in alone in an apartment in downtown Lexington. Jacob has stable income but has trouble managing his money effectively. ',
        idea: 'Jacob grew up with the internet, so he is very proficient with web-based services like AccountAid. He heard about AccountAid through coworkers and would use its calendar feature to let him know when money will be leaving his account as he has multiple streaming services subscriptions to keep track of.  ',
        outline: 'Jacob, Age 28, is an electrical engineer in Lexington, Kentucky. He moved to Lexington from Indianapolis in 2015 after...',
        img: 'Jacob - Persona 4.png',
    },
]

export const SCENARIOS = [
    {   
        persona: 'Jim',
        scenarios: [
            { 
                id: 1, 
                persona: 'Jim',
                label: 'Scenario 1',
                title: 'Budgeting For Retirement', 
                description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                                His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                                Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
            },
            { 
                id: 2, 
                label: 'Scenario 2',
                title: 'Bringing money management to the 21st century', 
                persona: 'Jim',
                description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                    Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. 
                    However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. 
                    Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. 
                    So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
            },
            { 
                id: 3, 
                label: 'Scenario 3',
                title: 'Paying back for lunch', 
                persona: 'Jim',
                description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis they still pay for his dinner. 
                    However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future. 
                    Jim’s son suggests they use the new app he had Jim download, AccountAid. Using the digital wallet within in the app. Jim can link to his bank account. His son now can send Jim payments to pay his parent’s back for lunch. They log into their accounts. Once logged in they navigate to the digital wallet where their credit/debit card is displayed with the balance displayed.
                    In the right side of the screen, there is a display with a “friends list.” Jim does not have any friends yet, so he navigates to the “add friends” function. Since Jim’s son already has an account, Jim can enter in his son’s name and adds him as a friend. Once Jim and his son are AccountAid friends, Jim’s son now enters in the amount of money he wishes to send to his father. 
                    Upon hitting send, a notification will send to Jim that he will need to accept for the money to be transferred into the account.`
            },
        ]
    },
    { 
        persona: 'Kris', 
        scenarios: [
            { 
                id: 1, 
                label: 'Scenario 1',
                title: 'Scenario 1', 
                persona: 'Kris',
                description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                                His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                                Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
            },
            { 
                id: 2, 
                label: 'Scenario 2',
                title: 'Scenario 2', 
                persona: 'Kris',
                description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                                Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various 
                                payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
            },
            { 
                id: 3, 
                label: 'Scenario 3',
                title: 'Scenario 3', 
                persona: 'Kris',
                description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis that they still pay for his dinner. 
                    However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future.`  
            }
        ] 
    },
    { 
        persona: 'Timmy', 
        scenarios: [
            { 
                id: 1, 
                label: 'Scenario 1',
                title: 'Scenario 1',
                persona: 'Timmy',
                description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                                His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                                Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
            },
            { 
                id: 2, 
                label: 'Scenario 2',
                title: 'Scenario 2', 
                persona: 'Timmy',
                description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                                Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various 
                                payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
            },
            { 
                id: 3, 
                label: 'Scenario 3',
                title: 'Scenario 3', 
                persona: 'Timmy',
                description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis that they still pay for his dinner. 
                    However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future.`  
            },
        ] 
    },
    { 
        persona: 'Jacob', 
        scenarios: [
            { 
                id: 1, 
                label: 'Scenario 1',
                title: 'Scenario 1', 
                persona: 'Jacob',
                description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                                His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                                Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
            },
            { 
                id: 2, 
                label: 'Scenario 2',
                title: 'Scenario 2', 
                persona: 'Jacob',
                description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                                Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various 
                                payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
            },
            { 
                id: 3, 
                label: 'Scenario 3',
                title: 'Scenario 3', 
                persona: 'Jacob',
                description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis that they still pay for his dinner. 
                    However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future.`  
            },
        ]
    },
]

export const USER_STORY_DATA = [
    { 
        persona: 'Jim', 
        label: 'User Stories',
        scenarios: [
            { 
                label: 'Scenario 1', 
                title: 'Budgeting For Retirement',
                stories: [
                    { id: 'jim-story-1-scene-1', label: '1.', description: 'As a consumer I want to have confidence my data is safe.' },
                    { id: 'jim-story-2-scene-1', label: '2.', description: 'As a consumer I want to have authentication when I send / transfer money.' },
                    { id: 'jim-story-3-scene-1', label: '3.', description: 'As a user I want to control where my information is stored and where it is transferred to ensure my personal information is not shared.' },
                    { id: 'jim-story-4-scene-1', label: '4.', description: 'As a registered user I want the system to verify my identification and bring me to my dashboard.' },
                    { id: 'jim-story-5-scene-1', label: '5.', description: 'As a user I want the system to display whether my email and password match my identity.' },
                    { id: 'jim-story-6-scene-1', label: '6.', description: 'As a registered user I want the system to allow me to reset my password if I have forgotten it.' },
                    { id: 'jim-story-7-scene-1', label: '7.', description: 'As an unregistered user I wan the system to register me to the system.' },
                    { id: 'jim-story-8-scene-1', label: '8.', description: 'As a registered user I want the option of the system to notify me upon someone logging into my profile.' },
                ] 
            },
            { 
                label: 'Scenario 2', 
                title: 'Bringing money management to the 21st century',
                stories: [
                    { id: 'jim-story-1-scene-2', label: '1.', description: 'As a user I want to be able to see the accounts that are hooked to AccountAid.'},
                    { id: 'jim-story-2-scene-2', label: '2.', description: 'As a user I want to see how much money I have left in my budget.' },
                    { id: 'jim-story-3-scene-2', label: '3.', description: 'As a user I want to see a pie chart of my expense categories.' },
                    { id: 'jim-story-4-scene-2', label: '4.', description: 'As a user I want to be able to view all my transactions.' },
                    { id: 'jim-story-5-scene-2', label: '5.', description: 'As a user I want to able to search transactions using a keyword or specific date.' },
                    { id: 'jim-story-6-scene-2', label: '6.', description: 'As a user I want to be able to see my spending habits by week/month.' },
                    { id: 'jim-story-7-scene-2', label: '7.', description: 'As a user I want to be able to add/remove/edit monthly payments.' },
                    { id: 'jim-story-8-scene-2', label: '8.', description: 'As a user I want to see my monthly payments on a calendar display.' },
                ] 
            },
            {
                label: 'Scenario 3', 
                title: 'Paying back for lunch',
                stories: [
                    { id: 'jim-story-1-scene-3', label: '1.', description: 'As a consumer I want to be able to send money for payments to others.' },
                    { id: 'jim-story-2-scene-3', label: '2.', description: 'As a consumer I want to be able to receive money from my friends.' },
                    { id: 'jim-story-3-scene-3', label: '3.', description: 'As a user I want to be able to search for my friends on AccountAid.' },
                    { id: 'jim-story-4-scene-3', label: '4.', description: 'As a user I want to be prompted to accept payments.' },
                    { id: 'jim-story-5-scene-3', label: '5.', description: 'As a user I want to have a list of my friends for easy access.' },
                    { id: 'jim-story-6-scene-3', label: '6.', description: 'As a user I want the digital wallet to keep track of my banking information.' },
                    { id: 'jim-story-7-scene-3', label: '7.', description: 'As a user I want my information such as my account balance to be displayed on the digital wallet.' },
                    { id: 'jim-story-8-scene-3', label: '8.', description: 'As a user I want to be able to add / remove debit / credit cards from my account.' },
                ] 
            },
        ]
    },
    { 
        persona: 'Kris', 
        label: 'User Stories',
        scenarios: [
            {
                label: 'Scenario 1', 
                title: 'Scenario 1',
                stories: [
                    { id: 'kris-story-1-scene-1', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-2-scene-1', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'kris-story-3-scene-1', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'kris-story-4-scene-1', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-5-scene-1', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-6-scene-1', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-7-scene-1', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-8-scene-1', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
            { 
                label: 'Scenario 2', 
                title: 'Scenario 2',
                stories: [
                    { id: 'kris-story-1-scene-2', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-2-scene-2', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'kris-story-3-scene-2', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'kris-story-4-scene-2', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-5-scene-2', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-6-scene-2', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-7-scene-2', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-8-scene-2', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
            { 
                label: 'Scenario 3', 
                title: 'Scenario 3',
                stories: [
                    { id: 'kris-story-1-scene-3', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-2-scene-3', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'kris-story-3-scene-3', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'kris-story-4-scene-3', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-5-scene-3', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-6-scene-3', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-7-scene-3', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'kris-story-8-scene-3', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
        ]
    },
    { 
        persona: 'Timmy', 
        label: 'User Stories',
        scenarios: [
            { 
                label: 'Scenario 1', 
                title: 'Scenario 1',
                stories: [
                    { id: 'timmy-story-1-scene-1', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-2-scene-1', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'timmy-story-3-scene-1', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'timmy-story-4-scene-1', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-5-scene-1', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-6-scene-1', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-7-scene-1', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-8-scene-1', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
            { 
                label: 'Scenario 2', 
                title: 'Scenario 2',
                stories: [
                    { id: 'timmy-story-1-scene-2', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-2-scene-2', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'timmy-story-3-scene-2', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'timmy-story-4-scene-2', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-5-scene-2', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-6-scene-2', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-7-scene-2', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-8-scene-2', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
            { 
                label: 'Scenario 3', 
                title: 'Scenario 3',
                stories: [
                    { id: 'timmy-story-1-scene-3', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-2-scene-3', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'timmy-story-3-scene-3', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'timmy-story-4-scene-3', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-5-scene-3', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-6-scene-3', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-7-scene-3', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'timmy-story-8-scene-3', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
        ]
    },
    { 
        persona: 'Jacob', 
        label: 'User Stories',
        scenarios: [
            { 
                label: 'Scenario 1', 
                title: 'Scenario 1',
                stories: [
                    { id: 'jim-story-1-scene-1', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-2-scene-1', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'jim-story-3-scene-1', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'jim-story-4-scene-1', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-5-scene-1', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-6-scene-1', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-7-scene-1', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-8-scene-1', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
            { 
                label: 'Scenario 2', 
                title: 'Scenario 2',
                stories: [
                    { id: 'jim-story-1-scene-2', label: '1.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-2-scene-2', label: '2.', description: 'As a farmer, I want to view my expenses easily.' },
                    { id: 'jim-story-3-scene-2', label: '3.', description: 'As a older man, I want to be able to have all my money digitally.' },
                    { id: 'jim-story-4-scene-2', label: '4.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-5-scene-2', label: '5.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-6-scene-2', label: '6.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-7-scene-2', label: '7.', description: 'As an old man, I hate to use technology.' },
                    { id: 'jim-story-8-scene-2', label: '8.', description: 'As an old man, I hate to use technology.' },
                ] 
            },
        ]
    },
]

export const FEATURE_DATA = [
    { 
        category: 'Banking',
        features: [
            { id: 'feature-banking-1', label: 'Feature Name 1', description: 'This is a feature' },
            { id: 'feature-banking-2', label: 'Feature Name 2', description: 'This is a feature' },
            { id: 'feature-banking-3', label: 'Feature Name 3', description: 'This is a feature' },
        ],
    },
    { 
        category: 'Budgeting',
        features: [
            { id: 'feature-budget-1', label: 'Feature Name 1', description: 'This is a feature' },
            { id: 'feature-budget-2', label: 'Feature Name 2', description: 'This is a feature' },
            { id: 'feature-budget-3', label: 'Feature Name 3', description: 'This is a feature' },
        ],
    }
]

export const INTERVIEW_QUESTIONS = [
    'How often do you think about budgeting?',
    'Do you have budgeting practices in place already? (i.e., Setting aside money for personal interests/rent/loans)?',
    'Do you think you could save more money if you were able to see how much you spend monthly? ',
    'What features do you look for in a banking app? Top 3? ',
    'What features do you look for in a budgeting app? Top 3? '
]

export const INTERVIEWS = [
    { id: 'interview-1', label: 'Interview 1',
      answers: [
        'I never actually do it, but I think about it maybe twice a month.', 
        'Not really, I have a few budget type things set up for mortgage payments and such, but no actual budgeting practices.', 
        'Definitely.', 
        'Mobile check deposits. Being able to transfer money between accounts (my own accounts). Electronic bill paying', 
        'Categorize payments by type. Graphically display expenditures. Analysis of what Ive been doing, separate one of goals, comparison of the two, ease of use to change or adjust budget amount.' 
      ]
    }, 
    { id: 'interview-2', label: 'Interview 2',
      answers: [
        'Id say I think about budgeting or saving money in some sense every day.', 
        'I limit my payments in my mind. I know how much money I have in my account, so I am always conscientious of what I can and cannot spend. I have not actually done any budgeting though.', 
        'Yeah, probably.', 
        'Instant alerts when money leaves account. Mobile check deposit', 
        'Calendar for scheduling/viewing payments. Pie charts for graphical representation. It would be cool to be able to enter something I want to buy and have it adjust my budget for me. For example, I want to buy a new car, so it will tell me to spend less on going out or something in order to afford it.' 
      ]
    },
    { id: 'interview-3', label: 'Interview 3',
      answers: [
        'Not as often as I should. I think about it monthly (When rent is due).', 
        'Not really. I know what I generally make per paycheck, so I mentally have a note of how much I make and how much of that goes into things that need funds. My budgeting primarily consists of making enough money to not have to worry about it. ', 
        'Definitely. Seeing where my money goes makes it easier to see where I am spending the most money and where I need to cut back to budget accordingly.', 
        'Ease of Use (How easy it is to understand, Easy to understand UI). Purchase History Log. Security of Account (Nobody else has access to my account ',
        'Graphics (Visual representation of the data. Pie chart/Bar Graph). Suggest budgets (Give it data and build a budget from that). Reminds you when expenses are due.'
      ]
    }, 
    { id: 'interview-4', label: 'Interview 4',
      answers: [
        'Once a month. I balance my checkbook at a regular interval.',
        'I use a spreadsheet that I put together and I use PNC’s virtual wallet.',
        'Yes. Credit card companies send it out once a year, but it can be requested earlier. I do think it would put things into perspective as it would show where your money is going.', 
        'Ease of use. Budgeting tool. Being able to transfer money quickly.',
        'Ability to plug in the amount of money you want to spend monthly, and it will keep track of that. Reserve/Growth feature. Calendar.'
      ]
    },
    { id: 'interview-5', label: 'Interview 5',
      answers: [
        'Quite often, I am some what concerned for my budget. I think about budgeting weekly because I get paid weekly. So, I must reconsider my spending habits and think through my funds.',
        'No, I usually just look at my bank account and if it’s not dangerously low I usually don’t stress.',
        'No, I don’t usually look at where I spend my money, I just make sure I don’t spend all my money. ',
        'I want to able to visualize where my money is going in a graph format and not just numbers on a page.',
        'Im able to deposit my checks every week. I can spend my money when I want to. Get a monthly statement on where my money is going.'
      ]
    },
    { id: 'interview-6', label: 'Interview 6',
      answers: [
        'Twice a week. I handle a church budget that includes managing the kitchen and cooking/food prep. I also budget for home (cooking, gasoline, clothes, children, etc.).',
        'don’t spend more than what you have -Mr. Reed',
        'Maybe, but I use a plan-ahead of everything method. Instead of adapting periodically, I try to plan everything ahead of time.',
        'Ease of use. Viewing monthly payments. Texts for upcoming expenses.',
        'Comparisons in price trends (gas, bread, meat, etc.). Comparisons for different stores (walmart vs Kroger).'
      ]
    },
]