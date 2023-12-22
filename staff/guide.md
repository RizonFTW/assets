Welcome Home!
=============

All commands below are shown in slash command form however prefix commands are well supported as well in case slash commands don't work

### Logging

All staff actions are logged to our database.  
  
In the past, staff activity was a huge problem. We hope doing this will allow us to better manage Infinity Bot List to make it a truly wonderful place.

### Your Role

Being a Website Moderator is also being the forefront of Infinity Bot List.  
  
You are the first interaction for people on the server. You also have one of the utmost important jobs for a bot list: Approving and Denying bots.

### The Process

The process of approving and denying bots at Infinity Bot List is a rather simple and straightforward process.  
  
When a bot gets added to the bot queue it'll show up in the #bot-logs channel in the Infinity Bot List Server. Here you will get a ping (`@Website Moderators`) and you will be able to view the bot profile page (which you must do while testing a bot).

### Resubmissions

Resubmitted means that for whatever reason the bot has been denied. Such bots can be resubmitted by the owner of the bot. (An example of this is `Ninja Bot` from the training sandbox)  
  
Head to Verification Center. In the #queue channel in Verification Center, you can then use `/queue` to get the bots pending verification.

### Queue Order

Please go in Queue order. A bot thats in #2 position should not be done before a bot that is in #1 position! This is to ensure that everyone has their bot reviewed fairly.  
  
If you see a ticket of the form "Why was my bot not yet tested", please be sure to check the queue order and then inform accordingly. As of now, this queue order is public (by running `/queue`)

### Inviting the bot

You can use the `/invite` command to get the invite to the bot based on its Bot ID, Name or Vanity.  
  
If you see a bot whose invite errors with 'Unknown Application' or otherwise fails in the OAuth2 page (due to requesting privileged intents, please deny it as per the 'Flagged/Banned Bot' [template](/staff/templates))

### Claim the bot

To limit confusion amongst other Website Moderators, Infinity Bot List has a claim system.  
  
Using `/claim` avoids multiple mods testing the same bot. If it turns out that you cannot test it after you've claimed it (ex. Something in real life came up that'll take longer than 30 minutes), use `/unclaim`.  
  
We want to avoid bots sitting claimed for days with no testing being done _which is also why the queue shows claimed bots as well_.  
  
_One difference from v3 in claims is the addition of "Force Claim" and "Remind" in `/claim`. "Force Claim" allows you to forcibly claim a bot when it is currently being reviewed by someone else_

### Some Pointers

Here are some pointers to keep in mind while testing a bot:  

- When testing the bot please ensure you are doing an in depth test. Not just a handful of commands.
    
- If the bot goes offline during testing please message the owner either directly or in the #bot-feedback channel in the main server. Ex: "_Hello @Toxic Dev your bot is offline and I can't test it. Let me know when this is fixed so I can continue the test_". Please also do this if the bot is online but unresponsive.
    
- Please refer to the #info channel on the Verification Center for rules of what's acceptable and what's not acceptable.
    
- If you have any questions please ping `@Staff Managers` or `@Head Staff Managers`. No question is a stupid question and we are always ready to help.
    
- After testing is complete please _do not remove the bot from the testing server. Arcadia will do this for you once you have added it to the main server_
    
- **You may test bots on your own server if you ever wish to. This may be required by some bots (eg. ticket bots, antinuke bots)**
    

### After Testing

You can _either_ use the panel or the bot to approve or deny the bot based on your personal preference. Panel will not support all features (such as onboarding which will NOT be implemented outside of the bot due to its complexity)  
  
Please note that the owner **DOES NOT** need to be in main server to use approve/deny. _Once approved, be sure to add it to the main server following which arcadia will kick the bot from testing server for you._

### Commonly asked permissions

Here are some commonly asked permissions and what to look out for if you see any such permission

- _Administrator_ - Bots that require the Administrator permission _on the bot account_ to run should be denied always (_but please still test `Sneeky` and give feedback on all commands and what you would do in the training sandbox_)
    
- _Manage Channel_ - Ticket bots commonly require this. Always test the functionality of the bot to see if it does anything related to channels before approving or denying. Such bots may also need certain functionality to be tested on your own server (especially ticket bots).
    

### Resources

Cheatsheet of some common staff responses (highly recommended to use this): [https://botlist.app/staff/templates](/staff/templates)
