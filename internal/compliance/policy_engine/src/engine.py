# Panther is a scalable, powerful, cloud-native SIEM written in Golang/React.
# Copyright (C) 2020 Panther Labs Inc
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.
"""Policy engine subprocess."""
import json
import sys
from typing import Any, Dict

from .policy import PolicySet


def analyze(data: Dict[str, Any]) -> Dict[str, Any]:
    """Run the Python analysis"""
    policy_set = PolicySet(data['policies'])
    result = {'resources': [policy_set.analyze(r) for r in data['resources']]}
    return result


def main() -> None:
    """Subprocess entry point."""
    process_input = json.loads(sys.stdin.read())
    result = analyze(process_input)

    # Print the json response, which should be faster than going to disk.
    print('\n' + json.dumps(result, separators=(',', ':')))


if __name__ == '__main__':
    main()  # pragma: no cover
