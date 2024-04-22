function Staff(
  idEl,
  nameEl,
  emailEl,
  passwordEl,
  datePickerEl,
  salaryEl,
  positionEl,
  hoursWorkingEl
) {
  (this.id = idEl),
    (this.name = nameEl),
    (this.email = emailEl),
    (this.password = passwordEl),
    (this.datepicker = datePickerEl),
    (this.salary = salaryEl),
    (this.position = positionEl),
    (this.hoursWorking = hoursWorkingEl);
  this.calcTotalSalary = function () {
    if (this.position === "Sếp") {
      return Number(this.salary * 3);
    }
    if (this.position === "Trưởng Phòng") {
      return Number(this.salary * 2);
    }
    if (this.position === "Nhân Viên") {
      return Number(this.salary);
    }
  };
  this.calcRanking = function (hours) {
    if (hours >= 192) {
      return "Nhân viên Xuất Sắc";
    }
    if (hours > 176) {
      return "Nhân viên Giỏi";
    }
    if (hours > 160) {
      return "Nhân viên Khá";
    } else {
      return "Nhân viên Trung Bình";
    }
  };
}
