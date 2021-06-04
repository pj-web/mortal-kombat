const player1 = {
    name: 'Kitana',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel Fans', 'Flying Blade', 'Glaive'],
    attack: function () {
        console.log(player1.name + ' ' + 'fight...');
    }
}

const player2 = {
    name: 'Sub-Zero',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ice Scepter', 'Kori Blade', 'Cybernetic Weapons'],
    attack: function () {
        console.log(player1.name + ' ' + 'fight...');
    }
}


function createPlayer(playerClass, playerObject) {
    
    const $player = document.createElement('div');
    $player.classList.add(playerClass);
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = playerObject.hp + '%';
    $progressbar.appendChild($life);
    const $name = document.createElement('div');
    $name.classList.add('name');
    $progressbar.appendChild($name);
    $name.innerText = playerObject.name;
    const $character = document.createElement('div');
    $character.classList.add('character');
    const $img = document.createElement('img');
    $img.src = playerObject.img;
    $character.appendChild($img);
    $player.appendChild($character);
    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);