function ImageShow({image}){
    return(
        <div>
            <img src={image.urls.full}/>
        </div>
    )
    
}

export default ImageShow;