#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '
alias vi=vim
alias gp=~/Scripts/gp.sh
alias lock=$HOME/Scripts/lock.sh
alias config='/usr/bin/git --git-dir=/home/carlos/.cfg/ --work-tree=/home/carlos'
