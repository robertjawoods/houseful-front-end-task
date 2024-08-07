export const CardImage = ({ image, isActive, line1 }: { image: string, isActive: boolean, line1: string }) => (
    <img src={image} alt={`Image of ${line1}`}
        className={`w-full object-cover rounded-t-lg flex-grow ${!isActive ? 'blur-sm' : ''}`}
        width={200} height={200}
    />
)
