hike = 'UDDDUDUU'
moreHikes = 'DUDDDUUDUU'


def counting_valleys_1(steps):
    height = 0
    prev_height = 0
    cnt = 0
    for i in range(len(steps)):
        if steps[i] == 'U':
            height += 1
        elif steps[i] == 'D':
            height -= 1
        if height == 0 and prev_height < 0:
            cnt += 1
        prev_height = height
    return cnt


assert counting_valleys_1(hike) == 1
assert counting_valleys_1(moreHikes) == 2
"""
"""


def counting_valleys(steps):
    sea_level = valley = 0
    for step in steps:
        if step == 'U':
            sea_level += 1
        else:
            sea_level -= 1

        if step == 'U' and sea_level == 0:
            valley += 1
    return valley


assert counting_valleys(hike) == 1
assert counting_valleys(moreHikes) == 2
