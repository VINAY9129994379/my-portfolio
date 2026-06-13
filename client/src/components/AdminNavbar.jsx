

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export default function AdminNavbar() {
  return (
    <div className="h-16 px-6 flex items-center justify-end border-b border-white/10">

      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 bg-[#7c6dfa] rounded-lg text-sm font-medium hover:bg-[#6a5ae0] transition">
            Login
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
          }}
          afterSignOutUrl="/"
        />
      </SignedIn>

    </div>
  );
}