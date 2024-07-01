export enum Permission {
	Add = "add", // Add {entity} => Add new {entity} to the team or allow transferring {entity} to this team
	Edit = "edit", // Edit {entity} => Edit settings for the {entity}
	Resubmit = "resubmit", // Resubmit {entity} => Resubmit {entity} on the team
	SetVanity = "set_vanity", // Set {entity} Vanity => Set vanity URL for a {entity} on the team
	RequestCert = "request_cert", // Request Certification for {entity} => Request certification for a {entity} on the team
	GetWebhooks = "get_webhooks", // Get {entity} Webhooks => Get {entity} webhooks. This is independent of updating them (you can still create/edit without this permission using the API)
	CreateWebhooks = "create_webhooks", // Create {entity} Webhooks => Create {entity} webhooks. Note that 'Test {entity} Webhooks' is a separate permission and is required to test webhooks.
	EditWebhooks = "edit_webhooks", // Edit {entity} Webhooks => Edit {entity} webhooks. Note that 'Test {entity} Webhooks' is a separate permission and is required to test webhooks.
	DeleteWebhooks = "delete_webhooks", // Delete {entity} Webhooks => Delete {entity} webhooks. Note that 'Test {entity} Webhooks' is a separate permission and is required to test webhooks.
	TestWebhooks = "test_webhooks", // Test {entity} Webhooks => Test {entity} webhooks. Note that this is a separate permission from 'Edit {entity} Webhooks' and is required to test webhooks.
	GetWebhookLogs = "get_webhook_logs", // Get {entity} Webhook Logs => Get {entity} webhook logs.
	DeleteWebhookLogs = "delete_webhook_logs", // Delete {entity} Webhook Logs => Delete {entity} webhook logs. Usually requires 'Get {entity} Webhook Logs' to be useful.
	UploadAssets = "upload_assets", // Upload {entity} Assets => Upload assets for {entity} on the team
	DeleteAssets = "delete_assets", // Delete {entity} Assets => Delete assets for {entity} on the team
	CreateOwnerReview = "create_owner_review", // Create {entity} Owner Review => Create an owner review for {entity} on the team.
	EditOwnerReview = "edit_owner_review", // Edit {entity} Owner Review => Edit an owner review for {entity} on the team.
	DeleteOwnerReview = "delete_owner_review", // Delete {entity} Owner Review => Delete an owner review for {entity} on the team.
	ViewSession = "view_session", // View {entity} Sessions => View sessions associated with the {entity}.
	CreateSession = "create_session", // Create {entity} Sessions => Create new sessions for the {entity} allowing for API (programmatic) access to the entity.
	RevokeSession = "revoke_session", // Revoke {entity} Sessions => Revoke existing sessions on the {entity}.
	RedeemVoteCredits = "redeem_vote_credits", // Redeem Vote Credits ({entity}) => Redeem vote credits for the entity
	Delete = "delete", // Delete {entity} => Delete a {entity} from the team. This is a very dangerous permission and should usually never be given to anyone.
	Owner = "*", // {entity} Admin => Has full control on {entity}'s.
}