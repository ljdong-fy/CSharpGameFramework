//----------------------------------------------------------------------------
//！！！不要手动修改此文件，此文件由LogicDataGenerator按ProtoFiles/LobbyMsg.dsl生成！！！
//----------------------------------------------------------------------------
var LobbyMessageDefine = {
	NodeRegister : 1,
	NodeRegisterResult : 2,
	VersionVerify : 3,
	VersionVerifyResult : 4,
	DirectLogin : 5,
	AccountLogout : 6,
	Logout : 7,
	GetQueueingCount : 8,
	UserHeartbeat : 9,
	KickUser : 10,
	TooManyOperations : 11,
	RequestNickname : 12,
	RequestSceneRoomInfo : 13,
	RequestSceneRoomList : 14,
	ServerShutdown : 15,
	Msg_CL_GetMailList : 16,
	Msg_LC_NotifyNewMail : 17,
	GmCode : 18,
	AccountLogin : 19,
	AccountLoginResult : 20,
	QueueingCountResult : 21,
	RequestNicknameResult : 22,
	ChangeName : 23,
	ChangeNameResult : 24,
	RoleEnter : 25,
	FriendInfoForMessage : 26,
	MemberInfoForMessage : 27,
	ItemInfoForMessage : 28,
	RoleEnterResult : 29,
	EnterScene : 30,
	ChangeSceneRoom : 31,
	EnterSceneResult : 32,
	QuitRoom : 33,
	MailItemForMessage : 34,
	MailInfoForMessage : 35,
	Msg_LC_SyncMailList : 36,
	Msg_CL_ReadMail : 37,
	Msg_CL_ReceiveMail : 38,
	Msg_CL_DeleteMail : 39,
	Msg_LC_LackOfSpace : 40,
	Msg_LC_SyncFriendList : 41,
	Msg_CL_AddFriend : 42,
	Msg_LC_AddFriend : 43,
	Msg_CL_RemoveFriend : 44,
	Msg_LC_RemoveFriend : 45,
	Msg_CL_MarkBlack : 46,
	Msg_LC_MarkBlack : 47,
	Msg_LC_SyncRoleInfo : 48,
	Msg_LC_SyncMemberList : 49,
	Msg_LC_SyncItemList : 50,
	Msg_CL_UseItem : 51,
	Msg_CL_DiscardItem : 52,
	Msg_CLC_StoryMessage : 53,
	Msg_LC_PublishEvent : 54,
	Msg_LC_SendGfxMessage : 55,
	Msg_LC_HighlightPrompt : 56,
};

exports.GameFrameworkMessage = {

	LobbyMessageDefine : LobbyMessageDefine,

};