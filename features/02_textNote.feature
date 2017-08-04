Feature: TextNote

@android
Scenario Outline: <crud> textnote
	Given A user that logins successfully
	When I "<crud>" a textnote
	Then it will "<crud>" the textnote


Examples:
	|   crud         |
	|   create       |
	|   edit         |
	|   delete       |