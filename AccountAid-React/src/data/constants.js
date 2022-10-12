export const NAVBAR_DATA = [ { label: 'About Us', id: 'about-us'}, { label: 'Interviews', id: 'interviews' }, { label: 'User Stories', id: 'user-stories' }, {label: 'Personas', id: 'personas' }, {label: 'Scenarios', id: 'scenarios' }]

export const FEATURE_DATA = [
    {
        id: 'budget-buddy-box',
        label: 'Budget Buddy',
        details: "This part of the product is responsible for recommending changes to a user's financial habits and to use graphics to show users a breakdown of their expenses in a pie chart format. If a user wishes BudgetBuddy can even limit a user's spending and reserve funds for certain bills."
    },
    { 
        id: 'digital-wallet-box',
        label: 'Digital Wallet',
        details: 'The Digital Wallet is responsible for keeping the funds available and to be a way for users to pay friends and interacts with BudgetBuddy to reserve money for certain bills.',
    },
    { 
        id: 'personal-dash-box',
        label: 'Personalized Dashboard',
        details: "The personal dashboard is a space where everything comes together. This feature is intended to be a space where you can view your monthly expenses using a calendar, see a list of deposits and expenses, and generate monthly statements.",
    },
]

export const PRODUCT_DESCRIPTION = "AccountAid is a project designed to help anyone from an individual just looking to save a little more each month to a small business trying to manage expenses. AccountAid is here to help! Use Budget Buddy to monitor areas of your spending with a calendar view and graphics to show you where your money is going. The personal dashboard will allow you to see incoming monthly payments and manage your accounts and balances. Finally, your digital wallet will allow you to pay your friends and recieve direct depsosits. You can even link your wallet to Budget Buddy to even limit how much you can spend. Use these tools and more to... Take charge of your finances!"
export const PRODUCT_VISION = "For any money wielding individual who needs to organize their finances, AccountAid is a web-based service that provides an intuitive interface for budgeting and tracking spending habits. Unlike typical banking or budgeting apps, our product utilizes tools that are accessible to users who may not have any background in finances."
export const PRODUCT_CUSTOMERS = "Our potential users would include individuals looking to save more money each month or need a way to manage their expenses with an intitive interface where you can get recommendations from Budget Buddy to see where they can cut back. This product even extends to small businesses who are looking for a product that can show them which graphics, such as pie charts, show where their biggest bills are. We believe its an important part of our product to be easily accessible for those not really versed in money management but be able to still assist budgeting pros."

export const DEVELOPER_CARD_DATA = [
    { name: 'Kaitlyn Reed', title: 'Project Manager', description: 'Senior at Bellarmine University. Double majoring in Computer Science and Mathematics. Minecraft is the best game ever made.', img: process.env.PUBLIC_URL+"images/kaitlyn-profile.jpg" },
    { name: 'Justin Mattix', title: 'Primary Programmer', description: 'Senior at Bellarmine University. Majoring in Computer Science. I love all things History!', img: process.env.PUBLIC_URL+"images/JLM-profile.jpg" },
    { name: 'Grant Pennington', title: 'Primary Applications Designer', description: 'Senior at Bellarmine University. Majoring in Computer Science. I produce music, and also LOVE the React JS framework.', img: process.env.PUBLIC_URL+"images/grant-profile.jpg" },
    { name: 'David Jones', title: 'Documentation/Test Coordinator', description: 'Senior at Bellarmine University. Majoring in Computer Engineering. I love anime.', img: process.env.PUBLIC_URL+"images/david-profile.jpg" },
]

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
                title: 'Scenario 1', 
                description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                                His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                                Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
            },
            { 
                id: 2, 
                title: 'Scenario 2', 
                persona: 'Jim',
                description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                                Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various 
                                payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
            },
            { 
                id: 3, 
                title: 'Scenario 3', 
                persona: 'Jim',
                description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis that they still pay for his dinner. However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future.`  
            },
        ]
    },
    { persona: 'Kris', scenarios: [
        { 
            id: 1, 
            title: 'Scenario 1', 
            description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                            His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                            Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
        },
        { 
            id: 2, 
            title: 'Scenario 2', 
            description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                            Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various 
                            payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
        },
        { 
            id: 3, 
            title: 'Scenario 3', 
            description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis that they still pay for his dinner. However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future.`  
        },
    ] },
    { persona: 'Timmy', scenarios: [
        { 
            id: 1, 
            title: 'Scenario 1', 
            description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                            His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                            Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
        },
        { 
            id: 2, 
            title: 'Scenario 2', 
            description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                            Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various 
                            payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
        },
        { 
            id: 3, 
            title: 'Scenario 3', 
            description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis that they still pay for his dinner. However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future.`  
        },
    ] },
    { persona: 'Jacob', scenarios: [
        { 
            id: 1, 
            title: 'Scenario 1', 
            description: `Jim is a 53-year-old farmer in Corydon, Indiana. His wife insists that they should start budgeting for retirement, and they should find out where their major expenses lie. Also, to find out how they could adjust so they could add more money to their retirement fund. 
                            His son hears of their problem and offers to show them online banking and more specifically using their new phones he bought them last Christmas. He shows them various apps that they can use to mark down their expenses. However, Jim is increasingly nervous about his information either being stolen or compromised like the people he hears about in the morning news. When searching for a way to budget and keep track of their money, Jim is adamant that it be a safe transaction. He wants the peace of mind that he will not get scammed out of the money he has worked his whole life for. His son assures him that the newest app he has shown them, AccountAid, has features implemented that require authentication before any information is shown and any transactions are processed. These authentications being handled by a 3rd party such as firebase. 
                            Jim uses the login and authentication feature and is pleased to know that a 3rd party is handling the authentication process and not the application itself. He is also appreciative that any transactions that he wishes to make are met with various identity checks for extra security. `  
        },
        { 
            id: 2, 
            title: 'Scenario 2', 
            description: `Jim and more specifically his wife often have problems with reading especially on their phones. They need a different way of visualizing their money and expenses without just reading bank statements and lists of their various payments and deposits. Jim’s son wants to show him different applications that offer more 21st century ways of going about this. 
                            Jim’s son began showing him the ways that they could create spreadsheets in things like excel that they could budget out their money and mark down expenses. Jim, however, was disappointed in this setup as he would much prefer to use a handwritten ledger and didn’t see any benefit in using technology to show their budgeting habits. However, upon discovering AccountAid, Jim was pleasantly surprised with the features that the app had to offer with visualizing their expenses. The BudgetBuddy part of the application showed various charts and graphs that would divide their expenses into categories like, utilities, monthly payments, entertainment, etc. Jim used the filters within the app to get a closer look at their entertainment expenses. Upon selecting the entertainment filter, the application then loads the various 
                            payments that Jim and his wife have made and asks them if they even want them to be organized by where they made the payment to. For example, Jim and his wife regularly go the Cracker Barrel on Sunday morning and they want to see how much they are spending a week just at the restaurant. So, they use the filtering feature on their expenses page and get a list and graphs of the times they have visited Cracker Barrel. Finally, the application noticed that they spend upwards of $30 dollars and suggests cutting back on some weeks and put that extra money in savings. `  
        },
        { 
            id: 3, 
            title: 'Scenario 3', 
            description: `Jim and his wife also go out with their son to lunch when he comes to visit them in Corydon. Their son appreciates Jim for his generosity but sometimes he feels guilty that even though he has a steady job as a lawyer in Indianapolis that they still pay for his dinner. However, since Jim and his wife have a different bank then they do it sometimes is hard to transfer funds between the two. This is further complicated because their son doesn’t carry cash anymore and believes that plastic and using his phone for payments is the way of the future.`  
        },
    ]
    },
]
export const INTERVIEWS = ['Interview 1', 'Interview 2', 'Interview 3']