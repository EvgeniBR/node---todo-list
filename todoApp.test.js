const todoApp = require("./todoApp");

describe("todoApp", () => {
  describe("newTask", () => {
    // it("new task adds new item to array", () => {}
    it("new task increment taskList in 1", () => {
      const initialArrayLength = todoApp.todoList.length;
      todoApp.newTask(`new task`);
      const afterAddArrayLength =  todoApp.todoList.length;

      expect(afterAddArrayLength).toEqual(initialArrayLength +1);
    });
  });
  describe("newTask - with undefind", () => {
    // it("new task adds new item to array", () => {}
    it("new task with undefined not increment taskList in 1", () => {
      const initialArrayLength = todoApp.todoList.length;
      todoApp.newTask();
      const afterAddArrayLength =  todoApp.todoList.length;

      expect(afterAddArrayLength).toEqual(initialArrayLength);
    });
  });
  describe("isComplete - with undefind", () => {
    // it("new task adds new item to array", () => {}
    it("should change the yes value to no and no to yes", () => {
      const isItYesOrNo = todoApp.todoList[0].markAsDone;
      todoApp.isComplete(0);

        if(isItYesOrNo ===`no`){
            const isItToOposit =`no`
            expect(isItToOposit).toEqual(isItYesOrNo);
        }else{
            const isItToOposit =`yes`
            expect(isItToOposit).toEqual(isItYesOrNo);
        }

      

     
    });
  });
});
