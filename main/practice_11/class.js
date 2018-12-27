class Class {
  constructor(number) {
    this.number = number;
  }
  getDisplayName() {
    return `Class ${this.number}`;
  }
  registerAssignLeaderListener(teacher) {
    this.assignLeaderListener = teacher;
  }
  registerJoinListener(teacher) {
    this.joinListener = teacher;
  }
  assignLeader(student) {
    if (student.klass === this) {
      this.leader = student;
      if (this.assignLeaderListener) {
        this.assignLeaderListener.declareAssignLeader(student, this);
      }
    } else {
      console.log 'It is not one of us.';
    }
  }
  appendMember(student) {
    student.klass = this;
  }
  isIn(student) {
    return this === student.klass;
  }
}
export default Class;