const styles = StyleSheet.create({
    cell_fixed: {
      width: 80,
      height: 40,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignSelf: 'center'
    },
    cell: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    top_text: {
      fontSize: 15,
      textAlign: 'center',
    },
    body_image: {
      height: 275,
      width: 275,
      borderWidth: 2,
      backgroundColor: 'white',
      borderRadius: 150,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'lightgrey',
    },
    boxcontainer:{ 
      flexDirection: 'row', 
      alignItems: 'flex-start', 
      paddingTop: 15,
      
    },
  
    textbox: {
      height: 150,
      width: 180,
      borderRadius: 50,
      backgroundColor: 'white',
      borderColor: 'lightgrey',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      margin:5,
    },
  })