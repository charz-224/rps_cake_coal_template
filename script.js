document.getElementById('ChangeName').addEventListener('click', (e) => {
    new_name = prompt('Enter your new username: ')
    document.getElementById('username').textContent = new_name
})

document.getElementById('PlayGame').addEventListener('click', (e) => {
    alert('welcome to JavaScript!');
    let username = prompt('please enter your user name');


    document.getElementById('username').textContent = username; 

    alert('welcome ' + username + '!')
    alert('you are going to play rock paper scissors vs a computer')
    alert('if you win, you receive a cake, lose, receive coal!')

    choice = prompt('choose one: rock, paper, or scissors')

    while (choice != 'rock' && choice != 'paper' && choice != 'scissors')
    {
        alert('invalid choice!')
        choice = prompt('choose one: rock, paper, or scissors')
    }

    computer_choices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * computer_choices.length);
    computer_choice = computer_choices[randomIndex]


    let coal = document.createElement('img');
    coal.src = './assets/coal.jpg';
    coal.width = 200; 
    coal.height = 200;


    let cake = document.createElement('img');
    cake.src = './assets/cake_image.jpg';
    cake.width = 200;
    cake.height = 200;
    document.getElementById('rps').innerHTML = ""
    if (computer_choice == choice)
    {
        alert('Draw! You played: ' + choice + ', computer played: ' + choice)
        document.getElementById('rps').appendChild(coal)
    }
    else if (computer_choice == 'rock' && choice == 'paper' || computer_choice == 'paper' && choice == 'scissors' || computer_choice == 'scissors' && choice == 'rock')
    {
        alert('Player wins! You played: ' + choice + ', computer played: ' + computer_choice)
        document.getElementById('rps').appendChild(cake)
    }
    else{
        alert('Computer wins! You played: ' + choice + ', computer played: ' + computer_choice)
        document.getElementById('rps').appendChild(coal)
    }
})