function PageHome(props){
    console.log(props)
    return(
        <div
            style={{
                height: '100vh', 
                width: '100%',
                background: 'blue',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <h1>Page Home</h1>
        </div>
    )
}

export default PageHome