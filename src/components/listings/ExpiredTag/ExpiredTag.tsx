export const ExpiredTag = ({ active, }: { active: boolean }) => (
    !active && (
        <span
            className="absolute top-0 right-0 bg-gray-500 text-white z-50 p-2 font-bold text-xs rounded-tr-lg"
        >
            EXPIRED
        </span>
    )
)
