type TypeProps = {
    completed: number
}

export function Habit({ completed }: TypeProps) {
    return (
        <p>{completed}</p>
    )
}