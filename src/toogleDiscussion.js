export const toogleDiscussion = () => {
  const containerChat = document.querySelector('.g-discussion');
  let list = [...containerChat.classList];

  if(list.includes('hide')) {
    containerChat.classList.remove('hide')
  } else {
    containerChat.classList.add('hide');
  }
}