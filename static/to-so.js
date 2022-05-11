document.querySelector('#push').onclick = function(){
    if(document.querySelector('.to-do-list input').value.length == 0){
      alert("Please Enter a Task!");
    }
    else{
      document.querySelector('.tasks').innerHTML += `
        <div class="task">
          <span id="taskname">
            ${document.querySelector('.to-do-list input').value}
          </span>
          <button class="delete">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      `;

      let current_tasks = document.querySelectorAll(".delete");
      for(let i=0; i<current_tasks.length; i++)
      {
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll('.task');
      for(var i=0; i<tasks.length; i++)
      {
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector('.to-do-list input').value="";
    }
  }

  document.querySelector('.to-do-list input').addEventListener("keyup", function(event){
      if(event.keyCode === 13){
          event.preventDefault();
          document.getElementById('push').click();
      }
  })