## Name of the project: To do _Space_ /
### Name of the group: Tasktronomy /
### Team member: Elise Høimyr /

To do _Space_ values the ideas of their users above all: if they were stars in the giant space that is the user’s mind. 
However, stars alone difficultly manage to shine bright to distant planets. 

As such,  the aim of To do _Space_ is to allow the user easily creating the constellations that are projects, the galaxies that are teams, with each one of their stars, the tasks. In other words; making the most out of their ideas.

Easy to use sharing features, a wide range of task organization possibilities, and many tools to improve the user’s comfort will be available with To do _Space_.

# Structure of the directory:

## Model classses:

-**Projectfolder.ts**: This class allows the user to crate a folder, give it a name and determining its location with the path. However there are currently no restriction to the type of data to enter in the path string, so invalid paths may be entered and cause errors.

-**Calendar.ts**: Currently no available features as it requires some special restrictions to fetch the date. 

-**Tasks.ts**(Task creation + task description): Allows the user to create a task, give it a name, a creation date (yet this one still needs to be manually inputed), determine its location (folder position), set a category to it, and a description. All of these are under the format of a string of characters.

-**UserAccount.ts**: Credentials of the user (email and password) under the format of a string with currently no verification process.

## Views: 

-**createtask.hbs**: Task creation page (view): the user can input a task name, a due date, a folder location, a description, and submit the form

-**index.hbs**: Main page with the welcome message

-**login.hbs**: The user can enter their username and password, then submit them. Still no verification nor identification process occuring.

-**newuser.hbs**: From to create a new user, filled by entering Name, email and a password.


## Application file: 

app.ts is the main file for the execution of the application which sends back to the Index page.
