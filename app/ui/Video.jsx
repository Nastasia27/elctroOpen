export default function Video() {
    return(
        <div className="">
            <video className="h-screen w-screen object-cover " muted playsInline loop autoPlay   
            >
                    <source src='/video.mp4' type="video/mp4" />
            </video>
        </div>
        
    )
}
