export function login(resinfo,userinfo) {
  return {
    type:'LOGIN',
    resinfo,
    userinfo
  }
}
export function wxlogin(wxinfo) {
  return {
    type: 'WXINFO',
    wxinfo
  }
}
export function commitGrade(grade) {
  return {
    type:'GRADE',
    grade
  }
}
export function answered() {
  return {
    type: 'ANSWER'
  }
}
export function reText() {
  return {
    type:'RETEXT'
  }
}