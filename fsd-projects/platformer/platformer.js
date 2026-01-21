$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createBadPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "maroon"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50,300,200,20, "red")
    createPlatform(350,600,300,20, "orange")
    createPlatform(600,200,200,20, "yellow")
    createPlatform(850,500,200,20, "green")
    createPlatform(1150,400,200,20, "blue")
    createPlatform(850,300,150,20, "purple")
    

    
    // TODO 3 - Create Collectables
    createCollectable("diamond", 700, 100, 0.4, 0.9)
    createCollectable("database", 400, 500, 0.4, 0.8)
    createCollectable("max", 1200, 300, 0.5, 0.8)


    
    // TODO 4 - Create Cannons
    createCannon("left",650,5000)
    createCannon("top",1000,1500)
    createCannon("bottom",400,1000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
