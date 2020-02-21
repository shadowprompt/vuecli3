module.exports = `
query($id: ID) {
  posts(post_type: "post"){
    ID
  }
  post(id: $id){
    ID,
    post_content,
  }
}
`;
