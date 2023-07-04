class Character {
    constructor(char, num){
        this.char = char;
        this.num = num;
        this.animation();
        this.quiz();
    }
    animation(){
        document.getElementById(`animate-button-${this.num}`).addEventListener('click', ()=> {
            this.char.animateCharacter();
        });
    }
    quiz(){
        this.char.quiz();
        document.getElementById(`reset-quiz-${this.num}`).addEventListener('click', ()=> {
            this.char.quiz();
        });
    }
}

const one = new Character(HanziWriter.create('character-target-1', '尚', {
    width: 250,
    height: 250,
    showCharacter: false
}), 1)


const two = new Character(HanziWriter.create('character-target-2', '進', {
    width: 250,
    height: 250,
    showCharacter: false
}), 2)

const three = new Character(HanziWriter.create('character-target-3', '教', {
    width: 250,
    height: 250,
    showCharacter: false
}), 3)

const four = new Character(HanziWriter.create('character-target-4', '育', {
    width: 250,
    height: 250,
    showCharacter: false
}), 4)