*ELIXIR-BUCKET*
- Users can login to the website and there login details will be auto-filled during the next login.
- Can swith between different tabs for quick view changes.
- The project at the moment has 2 tabs:
    A. Dashboard
    B. Users

    A. *DASHBOARD*
        *------------------*

    B. *USERS TAB*
        - When a user clicks on the 'User' tab a table of content shows up.
        - The table displays some columns namely:
            - NAME
                - The 'Name' column shows the name of the users that made a account in the 'ELIXIR'.
                - The column is searchable means users can search for specific names. If the given name in the seacrh input is not present, seacrh filter shows 'no data found'

            - EMAIL
                'Email' column shows the emails of the users.
            
            - ENROLLMENT NUMBER
                - This column shows the enrollment number users that are present.
                - The column can be sorted both in ascending and descending order.
            
            - TYPE
                - This column specifies the type of the user:
                    i. Student
                    ii. Teacher
                    iii. Admin
                - The 'type' column is filteable means if a user wants to look for a specific type say 'student', he/she can select that type and the table will dispay data related to that type only.    
                    
            - DEPARTMENT   
                - Department column shows what department a user belongs to.
                - This column is also filterable and searchable. 

*Technologies used in the project*
- React
- Typescript
- React-Routing
- Ant design library 
- Redux    

*Components used*
The components that are used for making the site can be found in 'elixir-bucket-main\src\components'

    - IconButton
        - For icons of the page.

    - Layout
        - Layout component includes
            - Header
                Defines the header of the page.
            - Footer
                Defines the footer of the page.
            - Side Menu
                Includes various tabs for quick navigation.
            - Main Layout
                Displays the content of the tabs in the side menu.

    - MyTable
        - This component provides the table that will be displayed when a user clicks on the 'user' tab

    - Login
        - The component shows a login form for the login process for a user.

*Some of the Ant design components used*
    - Table 
        import { Table } from "antd";
    - Layout
        import { Layout } from "antd";
    - Icon 
        import { SearchOutlined } from "@ant-design/icons";
    - Menu
        import { Menu } from "antd";

*STEPS TO RUN THE PROJECT IN YOUR LOCAL MACHINE*
- You must have a good code editor like VS Code.
- Install node.js in your local machine from "https://nodejs.org/en/". To verify installation run 'npm -v' or 'node -v'.
- Must have typescript installed. For installing typescript run 'npm install -g typescript' in your terminal.  
- For running the project run 'npm start' in your terminal.     