<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="Script.js" defer></script>
    <title>Document</title>
</head>

<body>
    <header>
        <div class="divScore">
            <div>Coins earned:<span id="score"></span></div>
            <br>
            <div> <br>multiplicateur :<span id="multiplicateur">1</span></div>
            <div>Passiv income : <span id="passifInc">0</span> </div>
        </div>


        <div class="coins">
            <p>Action available:</p>
            <button id="coinClick" name="coinClick">Axe blow +1 coin</button>
            <button id="resetCoin" name="resetCoin">Reset</button>
        </div>


        <div class="buy">
            <p>Shop:</p>
            <p>Upgrades available:</p>
            <button id="upgradeOne" name="upgradeOne">New sharpened ax x2 Cout =<span id="price1Display">10</span> coins</button>
            <button id="upgradeTwo" name="upgradeTwo">Double piston chainsaw x3 Cout = <span id="price2Display">15</span> coins</button>
            <button id="mine" name="mine">New employee on permanent contract +<span id="incre">2</span>/per sec Côut =<span id="price3Display">20</span></button>

        </div>
        <div class="divMessage">
            <p id="message" name="message"></p>
        </div>
    </header>
    <div class="backgroundContainer">
        <img id="gifImage" src="https://media.tenor.com/4kc5AXWNVvQAAAAM/barney-rubble-chopping-wood.gif" />
    </div>
</body>

</html>