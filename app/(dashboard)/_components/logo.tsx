import Image from "next/image";

const Logo = () => {
    return (
        <div style={{
            borderRadius: '50%', // Makes it round
            width: '80px', // Diameter of the circle
            height: '80px', // Diameter of the circle
            overflow: 'hidden', // Ensures the image doesn't exceed the circular boundary
            display: 'flex', // Ensures the image is centered in the div
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                height={80} // Set height to 200 for a diameter of 200
                width={80} // Set width to 200 for a diameter of 200
                alt="Logo"
                src={"/logo.svg"}
            />
        </div>
    )
}

export default Logo;
