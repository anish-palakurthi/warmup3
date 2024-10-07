/*
 * Example libc offset from malloc_usable_size to mprotect.
 * You can find this for your libc in gdb with the command
 *     p/x (uint64_t)mprotect - (uint64_t)malloc_usable_size
 * We will define this variable in our autograder with the
 * right value for our libc -- do not define it in partc.js!
 */
let mprotect_mus_offset = 0x3be16;
