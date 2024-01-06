import os
import random
import time

MIN_SEC = 5
MAX_SEC = 10

def mute_system_volume():
    """Mutes the system volume on macOS."""
    os.system("osascript -e 'set volume output muted true'")

def unmute_system_volume():
    os.system("osascript -e 'set volume output muted false'")

if __name__ == "__main__":
    unmute_system_volume()
    random_interval = random.randint(MIN_SEC, MAX_SEC + 1)
    print(f"Muting after {random_interval} seconds.")
    time.sleep(random_interval)
    mute_system_volume()