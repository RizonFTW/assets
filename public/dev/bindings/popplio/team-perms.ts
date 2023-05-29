export enum TeamPermissions {
	Undefined = "", // Undefined
	EditBotSettings = "EDIT_BOT_SETTINGS", // Edit bot settings for bots on the team
	AddNewBots = "ADD_NEW_BOTS", // Add new bots to the team or allow transferring bots to this team
	ResubmitBots = "RESUBMIT_BOTS", // Resubmit bots on the team
	CertifyBots = "CERTIFY_BOTS", // Request certification for bots on the team
	ResetBotTokens = "RESET_BOT_TOKEN", // Reset the API token of bots on the team
	EditBotWebhooks = "EDIT_BOT_WEBHOOKS", // Edit bot webhook settings. Note that 'Test Bot Webhooks' is a separate permission and is required to test webhooks.
	TestBotWebhooks = "TEST_BOT_WEBHOOKS", // Test bot webhooks. Note that this is a separate permission from 'Edit Bot Webhooks' and is required to test webhooks.
	GetBotWebhookLogs = "GET_BOT_WEBHOOK_LOGS", // Get bot webhook logs. Note that executing webhooks from webhook logs as well as deleting them are seperate permissions..
	RetryBotWebhookLogs = "RETRY_BOT_WEBHOOK_LOGS", // Retry execution of bot webhook logs. Usually requires 'Get Bot Webhook Logs' to be useful.
	DeleteBotWebhookLogs = "DELETE_BOT_WEBHOOK_LOGS", // Delete bot webhook logs. Usually requires 'Get Bot Webhook Logs' to be useful.
	SetBotVanity = "SET_BOT_VANITY", // Set vanity URLs for bots on the team
	DeleteBots = "DELETE_BOTS", // Delete bots from the team. This is a very dangerous permission and should usually never be given to anyone.
	EditServerSettings = "EDIT_SERVER_SETTINGS", // Edit server settings for servers on the team
	AddNewServers = "ADD_NEW_SERVERS", // Add new servers to the team or allow transferring servers to this team
	CertifyServers = "CERTIFY_SERVERS", // Request certification for servers on the team
	ResetServerTokens = "RESET_SERVER_TOKEN", // Reset the API token of servers on the team
	EditServerWebhooks = "EDIT_SERVER_WEBHOOKS", // Edit server webhook settings. Note that 'Test Server Webhooks' is a separate permission and is required to test webhooks.
	TestServerWebhooks = "TEST_SERVER_WEBHOOKS", // Test server webhooks. Note that this is a separate permission from 'Edit Server Webhooks' and is required to test webhooks.
	GetServerWebhookLogs = "GET_SERVER_WEBHOOK_LOGS", // Get server webhook logs. Note that executing webhooks from webhook logs as well as deleting them are seperate permissions..
	RetryServerWebhookLogs = "RETRY_SERVER_WEBHOOK_LOGS", // Retry execution of server webhook logs. Usually requires 'Get Server Webhook Logs' to be useful.
	DeleteServerWebhookLogs = "DELETE_SERVER_WEBHOOK_LOGS", // Delete server webhook logs. Usually requires 'Get Server Webhook Logs' to be useful.
	SetServerVanity = "SET_SERVER_VANITY", // Set vanity URLs for servers on the team
	DeleteServers = "DELETE_SERVERS", // Delete servers from the team. This is a very dangerous permission and should usually never be given to anyone.
	EditTeamInformation = "EDIT_TEAM_INFO", // Edit the team's name and avatar
	AddTeamMembers = "ADD_TEAM_MEMBERS", // Add team members to the team. Also needs 'Edit Team Member Permissions'
	RemoveTeamMembers = "REMOVE_TEAM_MEMBERS", // Remove team members from the team if they have all the permissions of the user they are removing. Does **NOT** need 'Edit Team Member Permissions'
	EditTeamMemberPermissions = "EDIT_TEAM_MEMBER_PERMISSIONS", // Edit team members' permissions
	Owner = "OWNER", // Do everything (as they're owner). This is a very dangerous permission and should usually never be given to anyone.
}