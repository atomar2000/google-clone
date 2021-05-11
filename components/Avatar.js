function Avatar({url, className}) {
    return (
        <img className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} src={url} alt="profile_pic" />
    )
}

export default Avatar
