const TaskPageButton = ({text, count, active, onClick}) => {
    const handleClick = () => {
        onClick();
    };
    return (
    <button className={
        `p-1.5 rounded-lg hover:bg-accent_glow_hover hover:text-accent_hover
        text-sm ${active ? 'bg-accent_glow text-accent' : 'bg-idle text-hint'}`
    } onClick={handleClick}>
        {`${text} ${count}`}
    </button>
  )
}

export default TaskPageButton