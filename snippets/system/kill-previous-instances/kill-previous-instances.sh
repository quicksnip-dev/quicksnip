function kill_prev() {
    # $$ contains current pid (grep ignore so it doesn't suicide)
    local processes
    readarray -t processes < <(pgrep -f "$0" | grep -v "$$")
    kill "${processes[@]}" >/dev/null 2>&1
}
