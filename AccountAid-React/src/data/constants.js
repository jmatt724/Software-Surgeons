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
                title: 'Payment method for Commissions.', 
                persona: 'Kris',
                description: `
                    Kris is a free-lance artist dependent on commissions for work. They have had trouble in the past receiving payments from their clients. This is usually due to some miscommunication about payment methods. Kris wants to include a virtual payment method to stay on top of their business numbers.
                    Kris has made a few friends in the area and otherwise that are also artists. Kris first asks around to see what types of applications her mutuals use to accept payments. They are 	worried that the popular applications will take a percentage of each transaction as many companies do. Kris’s friend, Taylor, suggested AccountAid to them a while ago to use the digital wallet feature. Taylor noted that AccountAid does not take a percentage of any transactions and it also allows you to transfer funds at any time. Kris also wants to be able to see their recent payments received to track their business.   
                    Kris uses the digital wallet feature to accept payments from their customers. They have also found that the digital wallet comes in handy when they sell pieces at art shows. The quick and 	easy transactions allow them to accommodate customers who do not carry cash. Kris is also happy that they can transfer funds over to their personal account at any time. 
                `
            },
            { 
                id: 2, 
                label: 'Scenario 2',
                title: 'Budgeting for Dry Payment Seasons', 
                persona: 'Kris',
                description: `Kris has found that the number of commissioned pieces requested correlates with the time of year. For example, Kris sees an increase in requests in Q4 around the holiday season. They sometimes have a hard time budgeting for when their income is low. Kris needs a way to visualize their spending in order to budget more efficiently. 

                Kris then uses their AccountAid profile to see a breakdown of their expenses in a pie chart format. They notice their largest expenses are rent, food, and entertainment. Kris’s biggest financial priorities are rent, food, and pet expenses. They begin to use the prioritization feature of AccountAid in order to keep better track of where their money is going. They use the priority feature to put caps on their spending so they can compare how much they are spending to how much they should be spending. Kris labels rent and food as red (high priority). Pet expenses get labeled as yellow (mid priority) and entertainment gets a green label (low priority).  
                
                Kris enjoys this feature because during dry season, sometimes they have to cut green categories to fund red or yellow categories. They have found great success in budgeting by being able to see how much money they are spending on different things. 
                `  
            },
            { 
                id: 3, 
                label: 'Scenario 3',
                title: 'Preparing for a Move.', 
                persona: 'Kris',
                description: `Kris has been frustrated with having to travel to the city for work. They are planning to move into an apartment in Reno to be more accessible to customers and cut down on transportation costs. Kris wants to spend some time looking at their income and monthly expenses to see what their budget looks like for an apartment.  

                Kris uses AccountAid to display graphics that represent their recurring expenses. They found that just using graphics for their current spending is not enough to develop a budget. Kris begins to use the spending trends feature of AccountAid to view their expenses over the last several months. The graph that is populated by AccountAid allows Kris to better survey their frequent spending throughout the year. This is especially helpful as Kris has an inconsistent income. They found that their spending can be optimized if they spend less monthly on eating out. Kris uses this information to adjust their spending caps to prioritize saving for moving.  
                
                Kris is satisfied using the graphical representation of their spending trends to budget effectively for their intended move. The visual gives Kris an easy-to-follow outline for saving for a down payment and rent. 
                `  
            }
        ] 
    },
    { 
        persona: 'Timmy', 
        scenarios: [
            { 
                id: 1, 
                label: 'Scenario 1',
                title: 'Weekly Food Cost',
                persona: 'Timmy',
                description:  
                `
                    Timmy is a 20-year-old college student who struggles with spending money in an effective way. He has decided that he wants to improve his budgeting habits by using AccountAid’s Budget Buddy. Timmy wants to make sure he can set weekly limits on purchases, so he doesn’t spend more money than he wants at his jobs.  
                    Timmy’s parents suggest using a budgeting app to help him manage his spending since he has trouble doing so himself. Timmy researches several budgeting apps and determines that AccountAid meets his needs. Timmy is worried that AccountAid will be like the rest of the banking apps he has used and will use outdated technology. Timmy would like a way to limit his spending per week as he has problems resisting the urge to buy food after class even if he doesn’t know if he has the funds for it. Timmy also has problems keeping track of when paychecks come in since he has 2 different jobs that pay on different days.  
                    Timmy uses AccountAid to help him manage his finances through the Budget Buddy tool by limiting his spending to the amount he sets aside for the week. AccountAid’s Personalized Dashboard would let Timmy know when money will be entering and leaving his account through a calendar feature. 
                    Timmy would set a budget for himself by navigating to Budget Buddy from his personalized dashboard. This would open a new page that gives Timmy several options to choose from, one of which will allow him to set limits on his spending on a weekly/monthly basis. Timmy enters the amount he wants to limit himself to weekly and AccountAid will check his balance and set aside the specified amount for the time period set.  
                `
            
            },
            { 
                id: 2, 
                label: 'Scenario 2',
                title: 'Managing Student Loans.', 
                persona: 'Timmy',
                description: `Timmy is a 20-year-old college student who has accumulated student loans throughout his time in college. Timmy has trouble managing his money, so he is worried he won’t be able to pay his debts on time and will end up owing more money than he already does. 

                Timmy has a history of spending all his money without considering his financial situation so he needs an application that will let him know when he must have money in his account.  
                
                Timmy would use AccountAid to manage his loans through his Personalized Dashboard. It would display when his payments are due on a calendar. When Timmy is ready to pay his loans or set money aside for them, he will click the calendar and expand the payment event. This will open an input box for Timmy to add funds to the event.  
                `
            },
            { 
                id: 3, 
                label: 'Scenario 3',
                title: 'Paying back parents for borrowed money.', 
                persona: 'Timmy',
                description: `Timmy wants to be able to pay his parents back for all the money he borrowed from them when he was struggling to manage his money well.  

                Timmy feels bad about asking for money from his parents all the time and wants to pay them back once he becomes financially stable. Timmy and his parents use the same bank, but Timmy’s bank makes transferring money difficult, so Timmy wants to use AccountAid to send money to his parents as it is easier than giving them cash when he owes them money.  
                
                In order to pay his parents back the money he had borrowed from them he would invite them to create an account on AccountAid. He would then navigate to his digital wallet and search for their accounts to send the money to. He would click their accounts, select a button that prompts him to enter the amount of money he is sending them and click send to securely transfer funds from his account to his parent’s account. This money can then be kept in their account on the website or be transferred to their personal bank accounts.  
                `
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
                title: 'Budgeting For Retirement.',
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
                title: 'Bringing money management to the 21st century.',
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
                title: 'Paying back for lunch.',
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
                title: 'Payment method for Commissions.',
                stories: [
                    { id: 'kris-story-1-scene-1', label: '1.', description: 'As a business I want to accept payments from customers.' },
                    { id: 'kris-story-2-scene-1', label: '2.', description: 'As a business I want to stay on top of trends.' },
                    { id: 'kris-story-3-scene-1', label: '3.', description: 'As a business I want to make business transactions easy.' },
                    { id: 'kris-story-4-scene-1', label: '4.', description: 'As a business I want to make my business accessible.' },
                    { id: 'kris-story-5-scene-1', label: '5.', description: 'As a business I want to cater to customers who do not carry cash.' },
                    { id: 'kris-story-6-scene-1', label: '6.', description: 'As a user I want to use application services without charge.' },
                    { id: 'kris-story-7-scene-1', label: '7.', description: 'As a user I want to transfer funds when I need to.' },
                    { id: 'kris-story-8-scene-1', label: '8.', description: 'As a user I want access to my recent transactions.' },
                ] 
            },
            { 
                label: 'Scenario 2', 
                title: 'Budgeting for Dry Payment Seasons.',
                stories: [
                    { id: 'kris-story-1-scene-2', label: '1.', description: 'As a user I want to see a comparison of monthly spendings.' },
                    { id: 'kris-story-2-scene-2', label: '2.', description: 'As a user I want to track my financial priorities.' },
                    { id: 'kris-story-3-scene-2', label: '3.', description: 'As a user I want to budget when income is low.' },
                    { id: 'kris-story-4-scene-2', label: '4.', description: 'As a user I want to prioritize my money.' },
                    { id: 'kris-story-5-scene-2', label: '5.', description: 'As a user I want to see visuals of my expenses.' },
                    { id: 'kris-story-6-scene-2', label: '6.', description: 'As a user I want to reallocate my money to different expenses.' },
                    { id: 'kris-story-7-scene-2', label: '7.', description: 'As a user I want to put spending caps on certain categories of my life.' },
                    { id: 'kris-story-8-scene-2', label: '8.', description: 'As a consumer I want to use virtual banking to optimize my time.' },
                ] 
            },
            { 
                label: 'Scenario 3', 
                title: 'Preparing for a Move.',
                stories: [
                    { id: 'kris-story-1-scene-3', label: '1.', description: 'As a user I want to see visuals of my spending.' },
                    { id: 'kris-story-2-scene-3', label: '2.', description: 'As a user I want to easily understand visuals within AccountAid.' },
                    { id: 'kris-story-3-scene-3', label: '3.', description: 'As a user I want to see my spending trends over time.' },
                    { id: 'kris-story-4-scene-3', label: '4.', description: 'As a user I want to compare my spending trends.' },
                    { id: 'kris-story-5-scene-3', label: '5.', description: 'As a user I want to plan for inconsistent income.' },
                    { id: 'kris-story-6-scene-3', label: '6.', description: 'As a user I want to budget for upcoming expenses.' },
                    { id: 'kris-story-7-scene-3', label: '7.', description: 'As a user I want to optimize my spending habits.' },
                    { id: 'kris-story-8-scene-3', label: '8.', description: 'As a user I want to prioritize saving money.' }
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
                title: 'Weekly Food Cost.',
                stories: [
                    { id: 'timmy-story-1-scene-1', label: '1.', description: 'As a user, I want to know when money comes into my account.' },
                    { id: 'timmy-story-2-scene-1', label: '2.', description: 'As a user, I need AccountAid to be user-friendly.' },
                    { id: 'timmy-story-3-scene-1', label: '3.', description: 'As a user, I want to see monthly payments on a calendar.' },
                    { id: 'timmy-story-4-scene-1', label: '4.', description: 'As a user, I want a way to limit my spending.' },
                    { id: 'timmy-story-5-scene-1', label: '5.', description: 'As a user, I want to know when money leaves my account.' },
                    { id: 'timmy-story-6-scene-1', label: '6.', description: 'As a user, I want to be able to see where Im spending the most money.' },
                    { id: 'timmy-story-7-scene-1', label: '7.', description: 'As a user, I want to be able to understand my finances in a simplified way.' },
                    { id: 'timmy-story-8-scene-1', label: '8.', description: 'As a user, I want to organize my payments, so I can feel more in control of my finances.' },
                ] 
            },
            { 
                label: 'Scenario 2', 
                title: 'Managing Student Loans.',
                stories: [
                    { id: 'timmy-story-1-scene-2', label: '1.', description: 'As a user, I want to know when money is taken out automatically.' },
                    { id: 'timmy-story-2-scene-2', label: '2.', description: 'As a user, I want to know how much money I need to set aside for recurring payments.' },
                    { id: 'timmy-story-3-scene-2', label: '3.', description: 'As a user, I want the ability to create payment events.' },
                    { id: 'timmy-story-4-scene-2', label: '4.', description: 'As a user, I want to be able to add money to events.' },
                    { id: 'timmy-story-5-scene-2', label: '5.', description: 'As a user, I want to be able to set aside money for events.' },
                    { id: 'timmy-story-6-scene-2', label: '6.', description: 'As a user, I want to see monthly payments on a calendar.' },
                    { id: 'timmy-story-7-scene-2', label: '7.', description: 'As a user, I want to see monthly payments at a glance.' },
                    { id: 'timmy-story-8-scene-2', label: '8.', description: 'As a debt holder, I need to know when loan payments will be occurring, so I don’t fall behind on payments.' },
                ] 
            },
            { 
                label: 'Scenario 3', 
                title: 'Paying back parents for borrowed money.',
                stories: [
                    { id: 'timmy-story-1-scene-3', label: '1.', description: 'As a user, I need banking transactions to be secure so that I can feel confident money will reach its intended destination.' },
                    { id: 'timmy-story-2-scene-3', label: '2.', description: 'As a user, I want to easily be able to send money to others through the website.' },
                    { id: 'timmy-story-3-scene-3', label: '3.', description: 'As a user, I want my banking information to be easy to add/remove.' },
                    { id: 'timmy-story-4-scene-3', label: '4.', description: 'As a user, I want to know my balance at a glance.' },
                    { id: 'timmy-story-5-scene-3', label: '5.', description: 'As a user, I want to know my information is secure and cant be easily taken.' },
                    { id: 'timmy-story-6-scene-3', label: '6.', description: 'As a user, I want to be able to easily transfer money in and out of my AccountAid balance.' },
                    { id: 'timmy-story-7-scene-3', label: '7.', description: 'As a user, I want a secure account with a username and password.' },
                    { id: 'timmy-story-8-scene-3', label: '8.', description: 'As a user, I want a username and password to identify me.' },
                    { id: 'timmy-story-9-scene-3', label: '9.', description: 'As a user, I want to search for other accounts by username and add them to a list to send money to faster.' }
                ] 
            },
        ]
    },
]

export const FEATURE_DATA = [
    {
        category: 'Budgeting',
        features: [
            { id: 'feature-budget-1', label: 'Create Categories/Buckets (Priority)', description: ['As a user, I want to see a pie chart of my expense categories.', 'As a user, I want to create / delete categories', 'As a user, I want to be able to see where I’m spending the most money ', 'As a user, I want to be able to understand my finances in simplified way.'], constraints: 'Some users may not prefer putting expenses in categories.', comments: 'Based on Jim’s and Timmy’s scenarios.' },
            { id: 'feature-budget-2', label: 'Priority and Progress (Priority)', description: ['As a user, I want to be able to prioritize my expenses. Red for rent, green for entertainment.', 'As a user, I want to be able to see how close I am to reaching my budgeting goals.', 'As a user, I want to create buckets to “save up” for expenses.'], constraints: 'Will default to green if priority is not specified', comments: 'Based on Jim’s scenarios.' },
            { id: 'feature-budget-3', label: 'Payment/Budget history (Priority)', description: ['As a user I want to view all my transactions.', 'As a user I want to see how much money I have left in my budget.', 'As a user I want my information such as my account balance to be displayed on the digital wallet.'], constraints: 'History may only be limited to a certain amount of time depending on storage space we can have.', comments: 'Based on Jim’s Scenarios.' },
            { id: 'feature-budget-4', label: 'Graphics (Priority)', description: ['As a user I want to see a pie chart of my expense categories.', 'As a user I want to see my monthly payments on a calendar display', 'As a user I want my information such as my account balance to be displayed on the digital wallet.', 'As a user I want my information such as my account balance to be displayed on the digital wallet.', 'As a user I want to be able to add / remove debit / credit cards from my account. (Cards will be displayed with graphics).'], constraints: 'User must have enough payment entries to have graphics display.', comments: 'Based on Kris’ Scenarios.' },
            { id: 'feature-budget-5', label: 'Calendar (Priority)', description: ['As a user I want to see my monthly payments on a calendar display.', 'As a user I want to be able to add/remove/edit monthly payments.', 'As a user I want to search transactions using a specific date.'], constraints: 'The number of items per day may be limited to a number.', comments: 'Based on Jim’s scenarios.' },
            { id: 'feature-budget-6', label: 'Spending Trends', description: ['As a user, I want to see a comparison of my weekly, monthly, and yearly spending.', 'As a user, I want to create a “save bucket” that I can add money to.', 'As a user, upon creation of a “save bucket” I want my budget to adjust to help me reach this goal.'], constraints: 'Creation of “save bucket” does not guarantee that budget can adjust to meet goal in specified time frame.', comments: 'Based on Kris’ scenarios.' },
            { id: 'feature-budget-7', label: 'Budget Buddy', description: ['As a user, I want my budget to adjust to meet goal in specified time frame if possible.', 'As a user, I want Budget Buddy to make suggestions on what I can do to help save money.'], constraints: 'Budget Buddy will need months to accurately adjust to user trends.', comments: 'Based on Kris’ scenarios.' },
        ],
    },
    {
        category: 'Banking',
        features: [
            { id: 'feature-banking-1', label: 'Add/Remove Cards (Priority)', description: ['As a user, I want my banking information to be easy to add/remove.', 'As a user I want the digital wallet to keep track of my banking information.', 'As a user I want to be able to add / remove debit / credit cards from my account.'], constraints: 'All cards may not be accepted.', comments: 'Based on Jim and Timmy’s Scenarios.' },
            { id: 'feature-banking-2', label: 'Balance Display (Priority)', description: ['As a user, I want to see how much money I have left in my budget.', 'As a user, I want my information such as my account balance to be displayed on the digital wallet.', 'As a user, I want to know my balance at a glance.'], constraints: 'Users will not be allowed to overdraft their accounts.', comments: 'Based on Jim’s Scenarios.' },
            { id: 'feature-banking-3', label: 'Payment History (Priority)', description: ['As a user I want to be able to view all my transactions.', 'As a user I want to able to search transactions using a keyword or specific date.', 'As a user, I want to organize my payments, so I can feel more in control of my finances'], constraints: 'Payment history may only go back a limited time.', comments: 'Based on Jim and Timmy’s Scenarios.' },
            { id: 'feature-banking-4', label: 'Make a Payment (Priority)', description: ['As a consumer I want to be able to send money for payments to others.', 'As a user, I want to be able to add money to events.','As a user, I want to easily be able to send money to others through the website.', 'As a user, I want to be able to easily transfer money in and out of my AccountAid balance.'], constraints: 'The person who is receiving the money must have an Account.', comments: 'Based on Jim and Timmy’s Scenarios.' },
            { id: 'feature-banking-5', label: 'Search for Payment', description: ['As a user, I want to be able to search for specific purchases', 'As a user, I want access to my recent transactions.'], constraints: 'Search history will have limited range.', comments: 'Based on Kris’ and Timmy’s Scenario.' },
            { id: 'feature-banking-6', label: 'Direct Deposit', description: ['As a business I want to accept payments from customers.', 'As a business I want to make business transactions easy.'], constraints: 'User must verify with their bank that Direct Deposit is allowed.', comments: 'Based on Kris’ Scenario.' },
            { id: 'feature-banking-7', label: 'Check Deposit', description: ['As a business I want to accept payments from customers.', 'As a business I want to make business transactions easy.', 'As a business, I want to cater to customers who do not carry cash.'], constraints: 'This will most likely be handled by a 3rd party.', comments: 'Based on Kris’ Scenario.' },
        ]
    },
    {
        category: 'Profile',
        features: [
            { id: 'feature-profile-1', label: 'Sign up/Login (Priority)', description: ['As a registered user I want the system to verify my identification and bring me to my dashboard.', 'As a user I want the display whether my email and password match my identity.', 'As a registered user I want the system to reset my password if I have forgotten it.', 'As an unregistered user I want the system to register my information to the system.'], constraints: 'User Authentication will be handled by Firebase.', comments: 'Based on Jim’s Scenarios.' },
            { id: 'feature-profile-2', label: 'Public/Private Profile (Priority)', description: ['As a user I want to be able to search for my friends on AccountAid.', 'As a user, I want to search for other accounts by username.'], constraints: 'People may not want to share their information with others.', comments: 'Based on Timmy’s Scenarios.' },
            { id: 'feature-profile-3', label: 'User Settings (Priority)', description: ['As a user I want to have confidence my data is safe.','As a consumer I want to have authentication when I send / transfer money.', 'As a user I want to control where my information is stored and where it is transferred to ensure my personal information is not shared.', 'As a registered user I want the option of the system to notify me upon someone logging into my profile.'], constraints: 'Some of authentication is handled by 3rd party so security cannot be totally guaranteed by AccountAid.', comments: 'Based on Jim’s Scenarios.' },
            { id: 'feature-profile-4', label: 'Profile Verification (Priority)', description: ['As a registered user I want the system to verify my email.', 'As a user I want the system to display whether my email and password match my identity.', 'As a registered user I want the system to allow me to reset my password.', 'As a user I want to see the accounts that are hooked to AccountAid under my name.'], constraints: 'Firebase must be online for authentication to work correctly.', comments: 'Based on Jim’s scenarios.' },
            { id: 'feature-profile-5', label: 'Add/remove friends', description: ['As a consumer I want to be able to receive money from my friends.', 'As a user I want to be able to search for my friends on AccountAid.', 'As a user, I want to search for other accounts by username and add them to a list to send money to faster.'], constraints: 'To be added as a friend they must have an account.', comments: 'Based on Jim and Timmy’s Scenarios.' },
            { id: 'feature-profile-6', label: 'Friend List', description: ['As a user I want to have a list of my friends for easy access.'], constraints: 'Friend list can only include accounts made through AccountAid’s website.', comments: 'Based on Jim’s Scenarios.' },
        ],
    },
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
        'Twice a week. I handle a church budget that includes managing the kitchen and cooking/food prep. I also budget for home (cooking, gasoline, clothes, children, etc).',
        'don’t spend more than what you have -Mr. Reed',
        'Maybe, but I use a plan-ahead of everything method. Instead of adapting periodically, I try to plan everything ahead of time.',
        'Ease of use. Viewing monthly payments. Texts for upcoming expenses.',
        'Comparisons in price trends (gas, bread, meat, etc). Comparisons for different stores (walmart vs Kroger).'
      ]
    },
]

export const PAGES = [
    { id: 'dashboard', label: 'Dashboard',
    description: [
        'The Dashboard will be the central hub for accessing the various aspects of the application.',
        'The user will be able to access the budgeting page and profile from the dashboard.',  
        'Dashboard will pull all user elements from Profile as Profile pulls all its data from Context.',
        'This includes username, email, firstName, lastName, balance, currency, friendList, and transactions.',
        'These all come from User in the Context.',
        'Most of these properties flow freely throughout the application.', 'Dashboard is also where you can search for fellow users.',
        'This is implemented with a search bar.',
        'You can type in a username and add them to your friends.',
        'This will then send a “pending” status to your potential friend and if accepted you will then see them listed in your friends list.'
    ]
    },
    { id: 'login', label: 'Login/Sign Up',
    description: ['The Login/Sign Up page will communicate with Firebase to handle the database of users.',
    'In communicating with Firebase, Login/Sign Up interacts with Profile: The profile will display user information.',
    'It communicates with context obtained from react context.'
    ]
    },
    { id: 'budget', label: 'Budgeting Page',
    description: ['The Budgeting Page will show users several aspects of budgeting such as graphs and calendars. ',
    'This page will allow the user to schedule payments for specific dates and view upcoming payments on a calendar.',
    'Allows the user to set single payments or recurring payments (weekly, monthly, yearly)',
    'Budget Buckets (Add/Delete/Edit): Set aside funds for a specific goal.',
    'The functionality will allow the user to create buckets with specific amounts or a percentage of total funds.']
    },
    { id: 'context', label: 'Context',
    description: ['Context is the backbone for the flow of information in the application. It is wrapped around the application completely.',
    'Context is the backbone for the flow of information in the application. It is wrapped around the application completely.',
    'It carries information from one component to another.',
    'Manages all user data and sends it to the components as needed.',
    'Context contains helper functions used multiple times throughout the software.',
    'The variables that Context holds are: userID, username, email, firstName, lastName, balance, currency, friendList, and transactions.',
    'userID: Randomly generated id that identifies the user.',
    'Generated by Firebase upon the creation of a new user.',
    'Acts as a database key that allows the user to access their information from it.'
    ]},
    { id: 'make_payments', label: 'Make Payments',
    description: ['This is where the functionality to make payments to your friends takes place.',
    'The search bar allows you to search for any user by their username to select them for payment.',
    'Once selected, there will be various places to enter in information about the payment.',
    'Fields such as amount and a description for the payment are some of the field’s users will need to enter.',
    'Once submitted the app will then update the user’s information within the database to complete the payment.',
    'Upon a successful payment the app will then navigate back to the dashboard.'
]},
    {id: "tech", label:'Building the System',
    description: ['Issues of separation of concerns – We addressed this issue in the fact that we kept each function on each separate page. For the most part the page’s only shared communication is to Firebase. This helps keeping our coupling down as the pages don’t really rely on each other to function. This somewhat gives us modules for each page. Where each page would have files to implement functionality, but those files never interact with files outside of their module. This allowed us to tackle one problem at a time during development. When we would work on a “module” for example thew make_payments page, since we separated our concerns, this work would never affect the dashboard or the scheduling page. We addressed the concept of avoiding duplication of functionality especially in dealing with Firebase. This was the result of many of our pages requiring API calls to the database to retrieve data. So, to avoid using the same function over and over we moved these function into a firebase file that all of the features that required a call to firebase could use. This prevented us from writing the same functions over and over within different files. This made our functions involving firebase cross-cutting concerns since these would often interact with more than one file. With dealing with security, we chose Firebase to use its built in Authorization technology. This allowed us to just import their auth functions and use within our app so that we could have security outside of our app.']},

    {id: "things_used", label: "Technologies Used",
    description: ['NPM – for package management for Node.js', ' Node.js – for backend JavaScript runtime environment', 
    ' React – for front-end JavaScript libraries',
    ' Chakra – UI component libraries for React applications',
    ' Firebase Cloud Firestore – NoSQL Google cloud database that works for Node.js',
    ' Firebase Auth – provides backend services, easy-to-use SDKs. It supports authentication using emails and passwords.',
    ' Docker – for containerizing the project']}

]