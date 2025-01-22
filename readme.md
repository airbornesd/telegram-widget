frontend:

- the frontend integrates the telegram login widget.

- users log in using their telegram account.

- the widget sends user data (e.g., user_id, first_name, etc.) to the backend.

backend:

- the server receives the user data and verifies if the user is a member of the specified telegram group using the getChatMember/verifyUser method.

- if the user is a member, the backend confirms their authentication; otherwise, it denies access.
