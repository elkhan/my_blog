socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
more_socks = [1, 2, 1, 2, 1, 3, 2]


def sock_market_set(ar):
    pairs = 0
    for element in set(ar):
        pairs += ar.count(element) // 2
    return pairs


assert sock_market_set(socks) == 3
assert sock_market_set(more_socks) == 2

"""
"""


def sock_market(ar):
    return sum([ar.count(i) // 2 for i in set(ar)])


assert sock_market(socks) == 3
assert sock_market(more_socks) == 2
