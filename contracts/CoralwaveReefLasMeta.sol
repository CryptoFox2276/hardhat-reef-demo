
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract CoralwaveReefLasMeta is ERC721Enumerable, Ownable, ReentrancyGuard {
    bool public enableMint;
    string private constant _baseExtension = ".json";

    string private _baseTokenURI;

    uint256 public immutable MAX_SUPPLY = 250;

    uint256 public immutable MAX_PRESALE_MINT = 125;

    // whitelist mint price is 20000 REEF
    uint256 public wlPrice = 20000;

    // public mint price is 30000 REEF
    uint256 public pubsalePrice = 30000;

    mapping(address => bool) private whitelists;

    mapping(address => uint256) private pubsaleMintLists;

    struct TokenMintInfo {
        address creater;
        uint64 mintedTimestamp;
    }

    mapping(uint256 => TokenMintInfo) private tokenMintInfo;

    Status private status;

    enum Status {
        Pending,
        Presale,
        Pubsale
    }

    modifier isMintable(uint256 quantity) {
        require(enableMint, "Mint not enabled yet");
        require(quantity > 0, "Zero amount");
        require(totalSupply() + quantity <= MAX_SUPPLY, "Exceeded max supply");
        _;
    }

    envet PresaleMinted(address indexed minter, uint256 quantity);
    envet PubsaleMinted(address indexed minter, uint256 quantity);
    event StatusChanged(Status previousStatus, Status newStatus);

    constructor() ERC721("CRLasMeta", "CoralwaveReefLasMeta") {

    }
}